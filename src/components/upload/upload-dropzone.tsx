"use client";

import Image from "next/image";
import { useTranslations } from "@/components/i18n/translation-provider";

type UploadDropzoneProps = {
  disabled?: boolean;
  isDragging?: boolean;
  error?: string | null;
  onBrowse: () => void;
};

export function UploadDropzone({
  disabled = false,
  isDragging = false,
  error,
  onBrowse,
}: UploadDropzoneProps) {
  const t = useTranslations();
  const containerClasses = [
    "relative w-full text-center transition",
    isDragging ? "bg-emerald-50/50 rounded-lg" : "",
  ].join(" ");
  const buttonLabel = disabled ? t("upload.dropzone.busy") : t("upload.dropzone.browse");

  return (
    <div className={containerClasses}>
      {/* 按钮：整体上移 32px */}
      <button
        type="button"
        onClick={onBrowse}
        className="absolute left-1/2 top-1/2 -mt-8 flex h-[66px] w-[280px] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2 rounded-md bg-emerald-500 px-6 text-base font-semibold text-white shadow-[0_4px_12px_rgba(16,185,129,0.25)] transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={disabled}
      >
        <Image src="/icons/folder.svg" alt="" width={40} height={40} className="h-10 w-10" />
        {buttonLabel}
      </button>
      
      {/* 文案：整体上移 32px，距离按钮 16px（一个字符高度） */}
      <div className="absolute left-1/2 top-1/2 mt-[17px] w-full -translate-x-1/2 space-y-2 px-6">
        <p className="text-sm text-gray-500">{t("upload.dropzone.hint")}</p>
        <p className="text-xs text-gray-400 whitespace-pre-line">{t("upload.dropzone.subHint")}</p>
      </div>
      
      {error && (
        <p className="mt-2 text-xs font-medium text-rose-500" role="status" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
}
