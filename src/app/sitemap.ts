import { HELP_INDEX_SLUG, getHelpLocales, getHelpPages } from "@/lib/help-center/content";
import type { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/lib/i18n/locales";
import { getAbsoluteUrl } from "@/lib/url";

const BASE_PATHS = ["", "privacy", "terms", "contact"] as const;

function toAbsoluteUrl(path: string) {
  if (!path) {
    return getAbsoluteUrl("");
  }
  return getAbsoluteUrl(`/${path}`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  BASE_PATHS.forEach((path) => {
    entries.push({
      url: toAbsoluteUrl(path),
      lastModified,
    });
  });

  locales
    .filter((locale) => locale !== defaultLocale)
    .forEach((locale) => {
      BASE_PATHS.forEach((path) => {
        const localizedPath = path ? `${locale}/${path}` : locale;
        entries.push({
          url: toAbsoluteUrl(localizedPath),
          lastModified,
        });
      });
    });

  getHelpLocales().forEach((locale) => {
    const localePrefix = locale === defaultLocale ? "" : `${locale}/`;
    entries.push({
      url: toAbsoluteUrl(`${localePrefix}${HELP_INDEX_SLUG}`),
      lastModified,
    });

    getHelpPages(locale).forEach((page) => {
      entries.push({
        url: toAbsoluteUrl(`${localePrefix}${HELP_INDEX_SLUG}/${page.slug}`),
        lastModified,
      });
    });
  });

  return entries;
}
