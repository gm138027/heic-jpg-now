"use client";

import { type ChangeEvent, type MutableRefObject, useCallback, useRef } from "react";
import { useTranslations } from "@/components/i18n/translation-provider";
import { QueueFile } from "@/types/queue";
import { formatFileSize } from "@/lib/file-utils";
import { useUploadQueueStore } from "../context/upload-queue-provider";

type UseUploadQueueOptions = {
  beforeAddRef?: MutableRefObject<(() => void) | null>;
};

export function useUploadQueue(options?: UseUploadQueueOptions) {
  const t = useTranslations();
  const {
    queue,
    setQueue,
    error,
    setError,
    isProcessing,
    setIsProcessing,
    isDragging,
    setIsDragging,
  } = useUploadQueueStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragDepth = useRef(0);

  const mutateQueueFile = useCallback(
    (id: string, updater: (file: QueueFile) => QueueFile) => {
      setQueue((prev) =>
        prev.map((file) => {
          if (file.id !== id) return file;
          const next = updater(file);
          if (file.previewUrl && file.previewUrl !== next.previewUrl) {
            revokePreview(file.previewUrl);
          }
          if (file.converted?.url && file.converted.url !== next.converted?.url) {
            revokeConverted(file.converted.url);
          }
          return next;
        }),
      );
    },
    [setQueue],
  );

  const openFileDialog = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFiles = useCallback(
    async (fileList: FileList | null) => {
      if (!fileList?.length) return;

      const files = Array.from(fileList).filter(isHeicFile);
      if (!files.length) {
        setError(t("upload.errors.onlyHeic"));
        return;
      }

      options?.beforeAddRef?.current?.();

      setIsProcessing(true);
      setError(null);

      try {
        const prepared = files.map((file) => ({
          id: crypto.randomUUID(),
          name: file.name,
          sizeLabel: formatFileSize(file.size),
          status: "ready" as QueueFile["status"],
          previewUrl: null,
          converted: null,
          error: null,
          file,
        }));
        setQueue((prev) => [...prev, ...prepared]);
      } catch (uploadError) {
        console.error(uploadError);
        setError(t("upload.errors.addFailed"));
      } finally {
        setIsProcessing(false);
      }
    },
    [options?.beforeAddRef, setError, setIsProcessing, setQueue, t],
  );

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      void handleFiles(event.target.files);
      if (event.target) {
        event.target.value = "";
      }
    },
    [handleFiles],
  );

  const handleDragEnter = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();

      dragDepth.current += 1;
      setIsDragging(true);
    },
    [setIsDragging],
  );

  const handleDragLeave = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();

      dragDepth.current -= 1;
      if (dragDepth.current <= 0) {
        dragDepth.current = 0;
        setIsDragging(false);
      }
    },
    [setIsDragging],
  );

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = "copy";
  }, []);

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      dragDepth.current = 0;
      setIsDragging(false);
      void handleFiles(event.dataTransfer.files);
    },
    [handleFiles, setIsDragging],
  );

  const handleRemoveFile = useCallback(
    (id: string) => {
      setQueue((prev) => {
        const target = prev.find((file) => file.id === id);
        if (!target) return prev;
        revokePreview(target.previewUrl);
        revokeConverted(target.converted?.url);
        return prev.filter((file) => file.id !== id);
      });
    },
    [setQueue],
  );

  const handleClearQueue = useCallback(() => {
    setQueue((prev) => {
      prev.forEach((file) => {
        revokePreview(file.previewUrl);
        revokeConverted(file.converted?.url);
      });
      return [];
    });
    setError(null);
  }, [setError, setQueue]);

  return {
    queue,
    setQueue,
    mutateQueueFile,
    error,
    setError,
    isProcessing,
    setIsProcessing,
    isDragging,
    fileInputRef,
    openFileDialog,
    handleFiles,
    handleInputChange,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleRemoveFile,
    handleClearQueue,
  };
}

function isHeicFile(file: File) {
  const ACCEPTED_MIME_TYPES = new Set(["image/heic", "image/heif"]);
  const ACCEPTED_EXTENSIONS = [".heic", ".heif"];

  if (file.type && ACCEPTED_MIME_TYPES.has(file.type)) {
    return true;
  }

  const lower = file.name.toLowerCase();
  return ACCEPTED_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

function revokePreview(url: string | null) {
  if (url) {
    URL.revokeObjectURL(url);
  }
}

function revokeConverted(url?: string | null) {
  if (url) {
    URL.revokeObjectURL(url);
  }
}
