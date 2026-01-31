import type { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/lib/i18n/locales";
import { getAbsoluteUrl } from "@/lib/url";

const BASE_PATHS = ["", "privacy", "terms"] as const;

function toAbsoluteUrl(path: string) {
  if (!path) {
    return getAbsoluteUrl("");
  }
  return getAbsoluteUrl(`/${path}`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  BASE_PATHS.forEach((path) => {
    entries.push({
      url: toAbsoluteUrl(path),
    });
  });

  locales
    .filter((locale) => locale !== defaultLocale)
    .forEach((locale) => {
      BASE_PATHS.forEach((path) => {
        const localizedPath = path ? `${locale}/${path}` : locale;
        entries.push({
          url: toAbsoluteUrl(localizedPath),
        });
      });
    });

  return entries;
}
