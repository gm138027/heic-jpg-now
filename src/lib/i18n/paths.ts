import { defaultLocale, type Locale } from "./locales";

function normalizeSlug(path?: string) {
  if (!path) return "";
  const trimmed = path.replace(/^\/+/, "");
  return trimmed ? `/${trimmed}` : "";
}

export function getLocalePath(locale: Locale, path?: string) {
  const slug = normalizeSlug(path);
  if (locale === defaultLocale) {
    return slug || "/";
  }
  return `/${locale}${slug || ""}`;
}
