"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { QueueFile } from "@/types/queue";
import { useTranslations } from "@/components/i18n/translation-provider";
import { FileQueueItem } from "./file-queue-item";

type FileQueueListProps = {
  files: QueueFile[];
  onRemove: (id: string) => void;
  disableRemove?: boolean;
  hideRemove?: boolean;
};

export function FileQueueList({
  files,
  onRemove,
  disableRemove = false,
  hideRemove = false,
}: FileQueueListProps) {
  const t = useTranslations();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollDown, setCanScrollDown] = useState(files.length > 5);
  const [canScrollUp, setCanScrollUp] = useState(false);

  if (files.length === 0) {
    return (
      <div className="px-6 py-8 text-center text-sm text-gray-400">
        {t("upload.queue.empty")}
      </div>
    );
  }

  const itemHeight = 81;
  const maxVisibleItems = 5;
  const containerHeight = Math.min(files.length, maxVisibleItems) * itemHeight;
  const showArrow = files.length > maxVisibleItems;
  const isArrowDown = canScrollDown || !canScrollUp;

  const handleScrollToBottom = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollTo({
      top: scrollContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleScrollToTop = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    setCanScrollUp(scrollTop > 5);
    setCanScrollDown(scrollTop < scrollHeight - clientHeight - 5);
  };

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="scrollbar-hide overflow-y-auto"
        style={{ height: `${containerHeight}px` }}
        onScroll={handleScroll}
      >
        {files.map((file, index) => (
          <FileQueueItem
            key={file.id}
            file={file}
            showDivider={index < files.length - 1}
            onRemove={onRemove}
            disableRemove={disableRemove}
            hideRemove={hideRemove}
          />
        ))}
      </div>

      {showArrow && (
        <button
          type="button"
          onClick={isArrowDown ? handleScrollToBottom : handleScrollToTop}
          className="absolute bottom-2 left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition hover:bg-gray-50 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)]"
          aria-label={isArrowDown ? t("upload.queue.scrollDown") : t("upload.queue.scrollUp")}
        >
          <Image
            src="/icons/down-chevron.svg"
            alt=""
            width={16}
            height={16}
            className={`h-4 w-4 transition-transform duration-300 ${isArrowDown ? "" : "rotate-180"}`}
          />
        </button>
      )}
    </div>
  );
}
