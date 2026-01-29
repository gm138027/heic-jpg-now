"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "@/components/i18n/translation-provider";
import { QueueFile } from "@/types/queue";
import { convertToJpeg } from "@/lib/conversion";
import { deriveOutputName, formatFileSize } from "@/lib/file-utils";
import { useProgressAnimator } from "../use-progress-animator";
import { trackEvent } from "@/lib/analytics/ga";

const MAX_PARALLEL_CONVERSIONS = 1;

type ConvertStage = "idle" | "progress" | "packaging" | "ready";

type UseConversionWorkflowOptions = {
  queue: QueueFile[];
  hasFiles: boolean;
  isProcessing: boolean;
  mutateQueueFile: (id: string, updater: (file: QueueFile) => QueueFile) => void;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
};

export function useConversionWorkflow({
  queue,
  hasFiles,
  isProcessing,
  mutateQueueFile,
  setError,
}: UseConversionWorkflowOptions) {
  const t = useTranslations();
  const [hasRevealedProgress, setHasRevealedProgress] = useState(false);
  const [convertStage, setConvertStage] = useState<ConvertStage>("idle");
  const [downloadBlob, setDownloadBlob] = useState<Blob | null>(null);
  const [packagingProgress, setPackagingProgress] = useState(0);
  const [hasDownloadedAll, setHasDownloadedAll] = useState(false);

  const activeConversionsRef = useRef(new Set<string>());
  const canceledTasksRef = useRef(new Set<string>());
  const conversionGenerationRef = useRef(0);
  const packagingInFlightRef = useRef(false);
  const packagingGenerationRef = useRef(0);
  const queueRef = useRef(queue);

  useEffect(() => {
    queueRef.current = queue;
  }, [queue]);

  const resetWorkflow = useCallback(() => {
    setHasRevealedProgress(false);
    setConvertStage("idle");
    setDownloadBlob(null);
    setPackagingProgress(0);
    setHasDownloadedAll(false);
    packagingInFlightRef.current = false;
    packagingGenerationRef.current += 1;
  }, []);

  const cancelFile = useCallback((id: string) => {
    canceledTasksRef.current.add(id);
  }, []);

  const cancelAllTasks = useCallback(() => {
    conversionGenerationRef.current += 1;
    canceledTasksRef.current.clear();
    activeConversionsRef.current.clear();
  }, []);

  const startConversion = useCallback(
    (file: QueueFile) => {
      if (activeConversionsRef.current.has(file.id) || canceledTasksRef.current.has(file.id)) {
        return;
      }
      const generation = conversionGenerationRef.current;
      activeConversionsRef.current.add(file.id);
      mutateQueueFile(file.id, (current) => ({
        ...current,
        status: "processing",
        error: null,
        converted: null,
      }));

      void convertToJpeg(file.file)
        .then(({ blob }) => {
          if (conversionGenerationRef.current !== generation) {
            return;
          }
          if (canceledTasksRef.current.has(file.id)) {
            return;
          }
          const convertedUrl = URL.createObjectURL(blob);
          mutateQueueFile(file.id, (current) => ({
            ...current,
            status: "done",
            error: null,
            converted: {
              url: convertedUrl,
              fileName: deriveOutputName(current.name),
              sizeLabel: formatFileSize(blob.size),
              blob,
            },
          }));
        })
        .catch((conversionError) => {
          if (conversionGenerationRef.current !== generation) {
            return;
          }
          if (canceledTasksRef.current.has(file.id)) {
            return;
          }
          const fallback = t("upload.errors.convertFailed");
          const message =
            conversionError instanceof Error && conversionError.message
              ? conversionError.message
              : fallback;
          mutateQueueFile(file.id, (current) => ({
            ...current,
            status: "error",
            converted: null,
            error: message,
          }));
          console.error(conversionError);
          setError((prev) => prev ?? message);
        })
        .finally(() => {
          activeConversionsRef.current.delete(file.id);
          canceledTasksRef.current.delete(file.id);
        });
    },
    [mutateQueueFile, setError, t],
  );

  useEffect(() => {
    if (isProcessing) return;
    const available = MAX_PARALLEL_CONVERSIONS - activeConversionsRef.current.size;
    if (available <= 0) return;
    const candidates = queue.filter(
      (file) =>
        file.status === "ready" &&
        !activeConversionsRef.current.has(file.id) &&
        !canceledTasksRef.current.has(file.id),
    );
    candidates.slice(0, available).forEach(startConversion);
  }, [queue, isProcessing, startConversion]);

  const packageResults = useCallback(async () => {
    if (packagingInFlightRef.current || queueRef.current.length === 0) {
      return;
    }
    packagingInFlightRef.current = true;
    const generation = ++packagingGenerationRef.current;
    setConvertStage("packaging");
    setPackagingProgress(0);

    try {
      const { default: JSZip } = await import("jszip");
      const zip = new JSZip();
      queueRef.current.forEach((file) => {
        if (file.status === "done" && file.converted?.blob) {
          zip.file(file.converted.fileName, file.converted.blob);
        }
      });

      const blob = await zip.generateAsync(
        { type: "blob" },
        (metadata) => {
          if (packagingGenerationRef.current !== generation) {
            return;
          }
          const fraction = Math.min(1, metadata.percent / 100);
          setPackagingProgress(fraction);
        },
      );

      if (packagingGenerationRef.current === generation) {
        setDownloadBlob(blob);
        setConvertStage("ready");
        setPackagingProgress(1);
      }
    } catch (packagingError) {
      console.error(packagingError);
      if (packagingGenerationRef.current === generation) {
        const packagingMessage = t("upload.errors.packageFailed");
        setError((prev) => prev ?? packagingMessage);
        setDownloadBlob(new Blob([], { type: "application/zip" }));
        setConvertStage("ready");
        setPackagingProgress(1);
      }
    } finally {
      if (packagingGenerationRef.current === generation) {
        packagingInFlightRef.current = false;
      }
    }
  }, [setError, t]);

  useEffect(() => {
    if (convertStage !== "progress") return;
    if (queue.length === 0) return;
    const allFinished = queue.every((file) => file.status === "done" || file.status === "error");
    if (!allFinished) return;
    void packageResults();
  }, [convertStage, queue, packageResults]);

  const handleDownloadAll = useCallback(() => {
    if (!downloadBlob) return;
    const url = URL.createObjectURL(downloadBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `heic-to-jpg-${Date.now()}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setHasDownloadedAll(true);
    trackEvent("download", { file_count: queueRef.current.length });
  }, [downloadBlob]);

  const handlePrimaryAction = useCallback(() => {
    if (convertStage === "ready") {
      handleDownloadAll();
      return;
    }

    if (!hasFiles) {
      setError(t("upload.errors.addFileFirst"));
      return;
    }

    if (convertStage !== "idle") {
      return;
    }

    setHasRevealedProgress(true);
    setConvertStage("progress");
    setError(null);
    setHasDownloadedAll(false);
    setDownloadBlob(null);
    setPackagingProgress(0);
    packagingInFlightRef.current = false;
    packagingGenerationRef.current += 1;
    trackEvent("convert", { file_count: queue.length });
  }, [convertStage, handleDownloadAll, hasFiles, queue.length, setError, t]);

  const completedCount = useMemo(
    () => queue.filter((file) => file.status === "done" || file.status === "error").length,
    [queue],
  );

  const progressPercent = useMemo(() => {
    const packagingUnit = queue.length > 0 ? 1 : 0;
    const totalUnits = queue.length + packagingUnit;
    if (totalUnits === 0) return 0;
    const packagingContribution =
      convertStage === "ready"
        ? packagingUnit
        : convertStage === "packaging"
          ? packagingProgress
          : 0;
    const numerator = completedCount + packagingContribution;
    return Math.min(100, Math.max(0, Math.round((numerator / totalUnits) * 100)));
  }, [queue.length, completedCount, convertStage, packagingProgress]);

  const isProgressActive = convertStage === "progress" || convertStage === "packaging";
  const displayProgress = useProgressAnimator(progressPercent, isProgressActive);

  const displayQueue = useMemo(() => {
    if (hasRevealedProgress) {
      return queue;
    }
    return queue.map((file) => ({
      ...file,
      status: "ready" as QueueFile["status"],
      converted: null,
    }));
  }, [hasRevealedProgress, queue]);

  const primaryState: "convert" | "progress" | "download" =
    convertStage === "ready" ? "download" : convertStage === "idle" ? "convert" : "progress";

  const convertDisabled = useMemo(() => {
    if (convertStage === "ready") {
      return !downloadBlob || isProcessing;
    }
    if (convertStage === "idle") {
      return !hasFiles || isProcessing;
    }
    return true;
  }, [convertStage, downloadBlob, hasFiles, isProcessing]);

  return {
    hasRevealedProgress,
    convertStage,
    completedCount,
    progressPercent: displayProgress,
    displayQueue,
    primaryState,
    convertDisabled,
    hasDownloadedAll,
    handlePrimaryAction,
    resetWorkflow,
    cancelFile,
    cancelAllTasks,
  };
}
