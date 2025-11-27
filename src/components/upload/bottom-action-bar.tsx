"use client";

import Image from "next/image";
import { useTranslations } from "@/components/i18n/translation-provider";

type BottomActionBarProps = {
  fileCount: number;
  disabled?: boolean;
  onAdd?: () => void;
  onConvert?: () => void;
  disableAdd?: boolean;
  primaryState?: "convert" | "progress" | "download";
  progressPercent?: number;
  addLabel?: string;
  convertLabel?: string;
  downloadLabel?: string;
};

export function BottomActionBar({
  fileCount,
  disabled = false,
  onAdd,
  onConvert,
  disableAdd = false,
  primaryState = "convert",
  progressPercent = 0,
  addLabel,
  convertLabel,
  downloadLabel,
}: BottomActionBarProps) {
  const t = useTranslations();
  const normalizedPercent = Math.min(100, Math.max(0, Math.round(progressPercent)));
  const resolvedAddLabel = addLabel ?? t("upload.actions.add");
  const resolvedConvertLabel = convertLabel ?? t("upload.actions.convert");
  const resolvedDownloadLabel = downloadLabel ?? t("upload.actions.downloadAll");
  const fileCountLabel = t("upload.bottomBar.fileCount", { count: fileCount });
  const previewHint = t("upload.bottomBar.previewHint");

  const renderPrimaryContent = () => {
    if (primaryState === "progress") {
      return <span className="text-xl font-bold tracking-wide">{normalizedPercent}%</span>;
    }
    if (primaryState === "download") {
      return (
        <>
          <span>{resolvedDownloadLabel}</span>
          <Image src="/icons/download.svg" alt="" width={24} height={24} className="h-6 w-6" />
        </>
      );
    }
    return (
      <>
        <span>{resolvedConvertLabel}</span>
        <Image src="/icons/next.svg" alt="" width={20} height={20} className="h-5 w-5" />
      </>
    );
  };

  return (
    <div className="flex items-stretch">
      <button
        type="button"
        className="flex h-[60px] w-[30%] items-center justify-center gap-2 bg-gray-700 px-6 text-base font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
        onClick={onAdd}
        disabled={disableAdd}
      >
        <Image
          src="/icons/file.svg"
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 brightness-0 invert"
        />
        <span>{resolvedAddLabel}</span>
      </button>
      <div className="flex h-[60px] w-[40%] flex-col items-center justify-center bg-gray-100 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-600">
          {fileCountLabel}
        </span>
        {fileCount >= 5 && <span className="text-[10px] text-gray-400">{previewHint}</span>}
      </div>
      <button
        type="button"
        className="flex h-[60px] w-[30%] items-center justify-center gap-2 bg-emerald-500 px-6 text-base font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
        onClick={onConvert}
        disabled={disabled}
      >
        {renderPrimaryContent()}
      </button>
    </div>
  );
}
