"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { defaultLocale, locales, type Locale } from "@/lib/i18n/locales";

const SESSION_LOCALE_KEY = "site_locale_session";
const supportedLocales = locales.filter((locale) => locale !== defaultLocale);

function resolveBrowserLocale(languages: readonly string[]): Locale | null {
  for (const language of languages) {
    const lower = language.toLowerCase();
    if (supportedLocales.includes(lower as Locale)) {
      return lower as Locale;
    }
    const base = lower.split("-")[0];
    if (supportedLocales.includes(base as Locale)) {
      return base as Locale;
    }
  }
  return null;
}

function readBrowserLanguages() {
  if (typeof navigator === "undefined") return [];
  if (navigator.languages && navigator.languages.length > 0) {
    return navigator.languages;
  }
  if (navigator.language) {
    return [navigator.language];
  }
  return [];
}

function setSessionLocale(locale: Locale) {
  try {
    sessionStorage.setItem(SESSION_LOCALE_KEY, locale);
  } catch {
    // Ignore storage errors (private mode, disabled storage, etc.)
  }
}

function readSessionLocale(): Locale | null {
  try {
    const stored = sessionStorage.getItem(SESSION_LOCALE_KEY);
    if (!stored) return null;
    return locales.includes(stored as Locale) ? (stored as Locale) : null;
  } catch {
    return null;
  }
}

export function LanguageAutoRedirect() {
  const router = useRouter();
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    const stored = readSessionLocale();
    if (stored) {
      if (stored !== defaultLocale) {
        const target = pathname === "/" ? `/${stored}` : `/${stored}${pathname}`;
        router.replace(target);
      }
      return;
    }

    const detected = resolveBrowserLocale(readBrowserLanguages());
    if (!detected || detected === defaultLocale) {
      setSessionLocale(defaultLocale);
      return;
    }

    setSessionLocale(detected);
    const target = pathname === "/" ? `/${detected}` : `/${detected}${pathname}`;
    router.replace(target);
  }, [pathname, router]);

  return null;
}
