"use client";

import { locales, type Locale } from "./locales";

export const SESSION_LOCALE_KEY = "site_locale_session";

export function readSessionLocale(): Locale | null {
  try {
    const stored = sessionStorage.getItem(SESSION_LOCALE_KEY);
    if (!stored) return null;
    return locales.includes(stored as Locale) ? (stored as Locale) : null;
  } catch {
    return null;
  }
}

export function writeSessionLocale(locale: Locale) {
  try {
    sessionStorage.setItem(SESSION_LOCALE_KEY, locale);
  } catch {
    // Ignore storage errors (private mode, disabled storage, etc.)
  }
}

export function clearSessionLocale() {
  try {
    sessionStorage.removeItem(SESSION_LOCALE_KEY);
  } catch {
    // Ignore storage errors (private mode, disabled storage, etc.)
  }
}
