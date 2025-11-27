import { locales, defaultLocale, type Locale } from "@/lib/i18n/locales";

function normalizePath(path?: string) {
  if (!path) return "";
  const trimmed = path.replace(/^\/+/, "");
  return trimmed ? `/${trimmed}` : "";
}

export function buildLanguageAlternates(path = "", currentLocale: Locale = defaultLocale) {
  const slug = normalizePath(path);
  const canonical =
    currentLocale === defaultLocale ? slug || "/" : `/${currentLocale}${slug || ""}`;

  const languages = locales.reduce<Record<string, string>>((acc, locale) => {
    acc[locale] = locale === defaultLocale ? slug || "/" : `/${locale}${slug || ""}`;
    return acc;
  }, {});

  languages["x-default"] = slug || "/";

  return {
    canonical,
    languages,
  };
}
