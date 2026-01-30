"use client";

import Image from "next/image";
import { QueueFile } from "@/types/queue";
import { useTranslations } from "@/components/i18n/translation-provider";
import { StatusBadge } from "./status-badge";

type FileQueueItemProps = {
  file: QueueFile;
  showDivider?: boolean;
  onRemove: (id: string) => void;
  disableRemove?: boolean;
  hideRemove?: boolean;
};

export function FileQueueItem({
  file,
  showDivider = false,
  onRemove,
  disableRemove = false,
  hideRemove = false,
}: FileQueueItemProps) {
  const t = useTranslations();
  const displayName =
    file.status === "done" && file.converted?.fileName ? file.converted.fileName : file.name;
  const previewAlt = t("upload.queue.previewAlt", { name: displayName });

  return (
    <div
      className={`flex items-center gap-4 px-6 py-4 ${showDivider ? "border-b border-gray-100" : ""}`}
    >
      {file.previewUrl ? (
        <div className="relative h-12 w-12 overflow-hidden rounded-md ring-1 ring-gray-100">
          <Image src={file.previewUrl} alt={previewAlt} fill className="object-cover" unoptimized />
        </div>
      ) : (
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-emerald-100 via-emerald-200 to-emerald-300 text-xs font-semibold text-emerald-700">
          {t("upload.queue.placeholder")}
        </div>
      )}
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-700">{displayName}</p>
        <p className="text-xs text-gray-400">
          {file.status === "done" && file.converted?.sizeLabel
            ? file.converted.sizeLabel
            : file.sizeLabel}
        </p>
        {file.error && <p className="text-xs text-rose-500">{file.error}</p>}
      </div>
      <StatusBadge status={file.status} />
      {file.converted?.url && (
        <a
          href={file.converted.url}
          download={file.converted.fileName}
          className="inline-flex items-center gap-1.5 rounded-md border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-600 transition hover:bg-emerald-50"
        >
          <span>{t("upload.actions.downloadSingle")}</span>
          <Image
            src="/icons/download.svg"
            alt=""
            width={14}
            height={14}
            className="h-3.5 w-3.5"
            style={{
              filter:
                "invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)",
            }}
          />
        </a>
      )}
      {!hideRemove && (
        <button
          type="button"
          className="rounded-md p-1 text-gray-300 transition hover:text-gray-500 disabled:cursor-not-allowed disabled:text-gray-200"
          aria-label={t("upload.queue.removeAria", { name: displayName })}
          onClick={() => onRemove(file.id)}
          disabled={disableRemove}
        >
          &times;
        </button>
      )}
    </div>
  );
}
