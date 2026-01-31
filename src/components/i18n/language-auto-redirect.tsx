"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { defaultLocale, locales, type Locale } from "@/lib/i18n/locales";
import { readSessionLocale, writeSessionLocale } from "@/lib/i18n/session-locale";

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

function isLikelyBot() {
  if (typeof navigator === "undefined") return false;
  return /bot|crawler|spider|crawling|slurp|bingpreview|bingbot|googlebot|yandex|baiduspider|duckduckbot|sogou/i.test(
    navigator.userAgent,
  );
}

export function LanguageAutoRedirect() {
  const router = useRouter();
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    if (isLikelyBot()) {
      return;
    }

    const stored = readSessionLocale();
    if (stored) {
      if (stored !== defaultLocale) {
        const search = typeof window !== "undefined" ? window.location.search : "";
        const hash = typeof window !== "undefined" ? window.location.hash : "";
        const targetBase = pathname === "/" ? `/${stored}` : `/${stored}${pathname}`;
        const target = `${targetBase}${search}${hash}`;
        const current = `${pathname}${search}${hash}`;
        if (target !== current) {
          router.replace(target);
        }
      }
      return;
    }

    const detected = resolveBrowserLocale(readBrowserLanguages());
    if (!detected || detected === defaultLocale) {
      writeSessionLocale(defaultLocale);
      return;
    }

    writeSessionLocale(detected);
    const search = typeof window !== "undefined" ? window.location.search : "";
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const targetBase = pathname === "/" ? `/${detected}` : `/${detected}${pathname}`;
    const target = `${targetBase}${search}${hash}`;
    const current = `${pathname}${search}${hash}`;
    if (target !== current) {
      router.replace(target);
    }
  }, [pathname, router]);

  return null;
}
