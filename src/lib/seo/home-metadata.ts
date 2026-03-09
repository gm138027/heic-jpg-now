import type { Metadata } from "next";
import type { AppDictionary } from "@/lib/i18n/get-dictionary";
import { defaultLocale, type Locale } from "@/lib/i18n/locales";
import { OG_LOCALE_MAP } from "@/lib/site-config";
import { getAbsoluteUrl } from "@/lib/url";
import { buildLanguageAlternates } from "./alternates";

const OG_IMAGE = getAbsoluteUrl("/logo/android-chrome-512x512.png");

function buildTitle(baseTitle: string, siteName: string) {
  const title = baseTitle.trim();
  if (!title) {
    return siteName;
  }
  if (title.toLowerCase().includes(siteName.toLowerCase())) {
    return title;
  }
  return `${title} | ${siteName}`;
}

export function buildHomeMetadata(locale: Locale, dictionary: AppDictionary): Metadata {
  const siteName = dictionary.common.site?.name || "HEIC JPG Now";
  const title = buildTitle(dictionary.common.seo?.h1?.title || siteName, siteName);
  const description =
    dictionary.common.seo?.h1?.subtitle || dictionary.common.site?.description || "";
  const path = locale === defaultLocale ? "" : `/${locale}`;
  const pageUrl = getAbsoluteUrl(path);

  return {
    title,
    description,
    alternates: buildLanguageAlternates("", locale),
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName,
      locale: OG_LOCALE_MAP[locale] || "en_US",
      type: "website",
      images: [
        {
          url: OG_IMAGE,
          width: 512,
          height: 512,
          alt: `${siteName} logo`,
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
