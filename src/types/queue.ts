export type QueueFileStatus = "ready" | "processing" | "done" | "error";

export type ConvertedAsset = {
  url: string;
  fileName: string;
  sizeLabel: string;
  blob: Blob;
};

export type QueueFile = {
  id: string;
  name: string;
  sizeLabel: string;
  status: QueueFileStatus;
  previewUrl: string | null;
  converted?: ConvertedAsset | null;
  error?: string | null;
  file: File;
};
