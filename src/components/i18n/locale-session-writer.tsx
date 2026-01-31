"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n/locales";

const SESSION_LOCALE_KEY = "site_locale_session";

type LocaleSessionWriterProps = {
  locale: Locale;
};

export function LocaleSessionWriter({ locale }: LocaleSessionWriterProps) {
  useEffect(() => {
    try {
      sessionStorage.setItem(SESSION_LOCALE_KEY, locale);
    } catch {
      // Ignore storage errors (private mode, disabled storage, etc.)
    }
  }, [locale]);

  return null;
}
