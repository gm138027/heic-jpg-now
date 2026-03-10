import type contactJa from "@/../public/locales/ja/contact.json";
import { defaultLocale, type Locale } from "./locales";

export type ContactDictionary = typeof contactJa;

async function importContactJson(locale: Locale): Promise<ContactDictionary> {
  try {
    const mod = await import(`@/../public/locales/${locale}/contact.json`);
    return mod.default as ContactDictionary;
  } catch (error) {
    if (locale === defaultLocale) {
      throw error;
    }
    const fallback = await import(`@/../public/locales/${defaultLocale}/contact.json`);
    return fallback.default as ContactDictionary;
  }
}

const cache = new Map<Locale, Promise<ContactDictionary>>();

export async function getContactDictionary(locale: Locale): Promise<ContactDictionary> {
  const resolvedLocale = locale ?? defaultLocale;
  if (!cache.has(resolvedLocale)) {
    cache.set(resolvedLocale, importContactJson(resolvedLocale));
  }
  return cache.get(resolvedLocale)!;
}
