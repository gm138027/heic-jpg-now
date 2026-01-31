"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n/locales";
import { writeSessionLocale } from "@/lib/i18n/session-locale";

type LocaleSessionWriterProps = {
  locale: Locale;
};

export function LocaleSessionWriter({ locale }: LocaleSessionWriterProps) {
  useEffect(() => {
    writeSessionLocale(locale);
  }, [locale]);

  return null;
}
