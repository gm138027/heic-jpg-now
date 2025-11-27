"use client";

import { useTranslations } from "@/components/i18n/translation-provider";
import { QueueFileStatus } from "@/types/queue";

type StatusBadgeProps = {
  status: QueueFileStatus;
};

const STATUS_STYLES: Record<QueueFileStatus, string> = {
  ready: "bg-gray-100 text-gray-600",
  processing: "bg-amber-50 text-amber-600",
  done: "bg-emerald-50 text-emerald-600",
  error: "bg-rose-50 text-rose-600",
};

const STATUS_KEYS: Record<QueueFileStatus, string> = {
  ready: "upload.status.ready",
  processing: "upload.status.processing",
  done: "upload.status.done",
  error: "upload.status.error",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const t = useTranslations();
  const className = STATUS_STYLES[status];
  const label = t(STATUS_KEYS[status]);

  return (
    <span className={`rounded-md px-3 py-1 text-xs font-semibold ${className}`}>
      {label}
    </span>
  );
}
