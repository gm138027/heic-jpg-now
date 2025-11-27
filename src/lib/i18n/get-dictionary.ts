import type commonJa from "@/../public/locales/ja/common.json";
import type privacyJa from "@/../public/locales/ja/privacy.json";
import type termsJa from "@/../public/locales/ja/terms.json";
import { defaultLocale, type Locale } from "./locales";

export type CommonDictionary = typeof commonJa;
export type PrivacyDictionary = typeof privacyJa;
export type TermsDictionary = typeof termsJa;

export type AppDictionary = {
  common: CommonDictionary;
  privacy: PrivacyDictionary;
  terms: TermsDictionary;
};

async function importJson<T>(locale: Locale, namespace: string): Promise<T> {
  const mod = await import(`@/../public/locales/${locale}/${namespace}.json`);
  return mod.default as T;
}

const cache = new Map<Locale, Promise<AppDictionary>>();

export async function getDictionary(locale: Locale): Promise<AppDictionary> {
  const resolvedLocale = locale ?? defaultLocale;
  if (!cache.has(resolvedLocale)) {
    cache.set(
      resolvedLocale,
      Promise.all([
        importJson<CommonDictionary>(resolvedLocale, "common"),
        importJson<PrivacyDictionary>(resolvedLocale, "privacy"),
        importJson<TermsDictionary>(resolvedLocale, "terms"),
      ]).then(([common, privacy, terms]) => ({
        common,
        privacy,
        terms,
      })),
    );
  }
  return cache.get(resolvedLocale)!;
}
