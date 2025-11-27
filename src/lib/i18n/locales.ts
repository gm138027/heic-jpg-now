export const locales = ["ja", "en", "es", "fr", "de", "pt"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ja";
