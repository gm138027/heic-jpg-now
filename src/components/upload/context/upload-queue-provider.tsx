"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { QueueFile } from "@/types/queue";

type UploadQueueStore = {
  queue: QueueFile[];
  setQueue: React.Dispatch<React.SetStateAction<QueueFile[]>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  isProcessing: boolean;
  setIsProcessing: React.Dispatch<React.SetStateAction<boolean>>;
  isDragging: boolean;
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
};

const UploadQueueContext = createContext<UploadQueueStore | null>(null);

export function UploadQueueProvider({ children }: { children: React.ReactNode }) {
  const [queue, setQueue] = useState<QueueFile[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const value = useMemo(
    () => ({
      queue,
      setQueue,
      error,
      setError,
      isProcessing,
      setIsProcessing,
      isDragging,
      setIsDragging,
    }),
    [queue, setQueue, error, setError, isProcessing, setIsProcessing, isDragging, setIsDragging],
  );

  return <UploadQueueContext.Provider value={value}>{children}</UploadQueueContext.Provider>;
}

export function useUploadQueueStore() {
  const context = useContext(UploadQueueContext);
  if (!context) {
    throw new Error("useUploadQueueStore must be used within an UploadQueueProvider");
  }
  return context;
}
