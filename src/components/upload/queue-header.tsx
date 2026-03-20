"use client";

import { useTranslations } from "@/components/i18n/translation-provider";

type QueueHeaderProps = {
  disabled?: boolean;
  fileCount: number;
  successCount: number;
  errorCount: number;
  onClear: () => void;
};

export function QueueHeader({
  disabled = true,
  fileCount,
  successCount,
  errorCount,
  onClear,
}: QueueHeaderProps) {
  const t = useTranslations();
  const summarySuccess = t("upload.queue.summarySuccess", {
    total: fileCount,
    success: successCount,
  });
  const summaryFailed =
    errorCount > 0 ? t("upload.queue.summaryFailed", { error: errorCount }) : null;

  return (
    <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/80 px-6 py-3 text-sm text-gray-500">
      <span className="font-medium text-gray-600">
        <span>{summarySuccess}</span>
        {summaryFailed && (
          <span className="text-amber-600">{" ・ "}{summaryFailed}</span>
        )}
      </span>
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={disabled}
        onClick={onClear}
      >
        {t("upload.queue.clear")}
      </button>
    </div>
  );
}
