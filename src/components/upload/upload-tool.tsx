"use client";

import { useCallback, useEffect, useRef } from "react";
import { useTranslations } from "@/components/i18n/translation-provider";
import { UploadCard } from "./upload-card";
import { UploadDropzone } from "./upload-dropzone";
import { QueueHeader } from "./queue-header";
import { FileQueueList } from "./file-queue-list";
import { BottomActionBar } from "./bottom-action-bar";
import { installHeicDebugHooks } from "./use-heic-debug";
import { useUploadQueue } from "./hooks/use-upload-queue";
import { useConversionWorkflow } from "./hooks/use-conversion-workflow";

export function UploadTool() {
  const t = useTranslations();

  useEffect(() => {
    installHeicDebugHooks();
  }, []);

  const beforeAddRef = useRef<(() => void) | null>(null);

  const {
    queue,
    error,
    setError,
    isProcessing,
    isDragging,
    fileInputRef,
    openFileDialog,
    handleInputChange,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleRemoveFile: baseHandleRemoveFile,
    handleClearQueue: baseHandleClearQueue,
    mutateQueueFile,
  } = useUploadQueue({ beforeAddRef });

  const hasFiles = queue.length > 0;

  const {
    hasRevealedProgress,
    convertStage,
    completedCount,
    progressPercent,
    displayQueue,
    primaryState,
    convertDisabled,
    hasDownloadedAll,
    handlePrimaryAction,
    resetWorkflow,
    cancelFile,
    cancelAllTasks,
  } = useConversionWorkflow({
    queue,
    hasFiles,
    isProcessing,
    mutateQueueFile,
    setError,
  });

  const prevLengthRef = useRef(queue.length);
  useEffect(() => {
    if (prevLengthRef.current > 0 && queue.length === 0) {
      cancelAllTasks();
      resetWorkflow();
    }
    prevLengthRef.current = queue.length;
  }, [queue.length, cancelAllTasks, resetWorkflow]);

  useEffect(() => {
    beforeAddRef.current = () => {
      if (queue.length === 0) {
        cancelAllTasks();
        resetWorkflow();
      }
    };
  }, [queue.length, cancelAllTasks, resetWorkflow]);

  const handleAddAction = useCallback(() => {
    if (convertStage === "ready" && hasDownloadedAll) {
      cancelAllTasks();
      resetWorkflow();
      baseHandleClearQueue();
      setError(null);
      return;
    }
    openFileDialog();
  }, [
    convertStage,
    hasDownloadedAll,
    cancelAllTasks,
    resetWorkflow,
    baseHandleClearQueue,
    openFileDialog,
    setError,
  ]);

  const handleRemoveFile = useCallback(
    (id: string) => {
      cancelFile(id);
      baseHandleRemoveFile(id);
    },
    [baseHandleRemoveFile, cancelFile],
  );

  const handleClearQueue = useCallback(() => {
    cancelAllTasks();
    resetWorkflow();
    baseHandleClearQueue();
    setError(null);
  }, [cancelAllTasks, resetWorkflow, baseHandleClearQueue, setError]);

  const displayedCompletedCount = hasRevealedProgress ? completedCount : 0;
  const addButtonLabel =
    convertStage === "ready" && hasDownloadedAll
      ? t("upload.actions.addMore")
      : t("upload.actions.add");
  const convertLabel = t("upload.actions.convert");
  const downloadLabel = t("upload.actions.downloadAll");

  return (
    <>
      <UploadCard>
        {hasFiles ? (
          <>
            <QueueHeader
              fileCount={queue.length}
              completedCount={displayedCompletedCount}
              onClear={handleClearQueue}
              disabled={isProcessing}
            />
            {error && (
              <p className="px-6 py-2 text-xs font-medium text-rose-500" role="alert">
                {error}
              </p>
            )}
            <FileQueueList
              files={displayQueue}
              onRemove={handleRemoveFile}
              disableRemove={isProcessing}
              hideRemove={convertStage === "ready"}
            />
            <BottomActionBar
              fileCount={queue.length}
              onAdd={handleAddAction}
              onConvert={handlePrimaryAction}
              disabled={convertDisabled}
              disableAdd={isProcessing}
              primaryState={primaryState}
              progressPercent={progressPercent}
              addLabel={addButtonLabel}
              convertLabel={convertLabel}
              downloadLabel={downloadLabel}
            />
          </>
        ) : (
          <div
            className="flex h-[300px] items-center justify-center border-b border-gray-100 px-8"
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <UploadDropzone
              onBrowse={openFileDialog}
              disabled={isProcessing}
              isDragging={isDragging}
              error={error}
            />
          </div>
        )}
      </UploadCard>
      <input
        ref={fileInputRef}
        type="file"
        accept=".heic,.heif,image/heic,image/heif"
        multiple
        className="sr-only"
        onChange={handleInputChange}
      />
    </>
  );
}
