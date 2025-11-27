"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
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

type SharedState = {
  queue: QueueFile[];
  error: string | null;
  isProcessing: boolean;
  isDragging: boolean;
};

const sharedState: SharedState = {
  queue: [],
  error: null,
  isProcessing: false,
  isDragging: false,
};

function useSharedState<Key extends keyof SharedState>(
  key: Key,
): [SharedState[Key], React.Dispatch<React.SetStateAction<SharedState[Key]>>] {
  const [value, setValue] = useState<SharedState[Key]>(() => sharedState[key]);

  useEffect(() => {
    sharedState[key] = value;
  }, [key, value]);

  return [value, setValue];
}

export function UploadQueueProvider({ children }: { children: React.ReactNode }) {
  const [queue, setQueue] = useSharedState("queue");
  const [error, setError] = useSharedState("error");
  const [isProcessing, setIsProcessing] = useSharedState("isProcessing");
  const [isDragging, setIsDragging] = useSharedState("isDragging");

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
