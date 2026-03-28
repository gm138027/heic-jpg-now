import type { Metadata } from "next";
import { defaultLocale, type Locale } from "@/lib/i18n/locales";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { OG_LOCALE_MAP } from "@/lib/site-config";
import { getAbsoluteUrl } from "@/lib/url";
import { type AboutPage, ABOUT_SLUG } from "./content";

const OG_IMAGE = getAbsoluteUrl("/logo/android-chrome-512x512.png");
const SITE_NAME = "HEIC JPG Now";

export function buildAboutMetadata(page: AboutPage, locale: Locale): Metadata {
  const pagePath = locale === defaultLocale ? `/${ABOUT_SLUG}` : `/${locale}/${ABOUT_SLUG}`;
  const pageUrl = getAbsoluteUrl(pagePath);
  const ogLocale = OG_LOCALE_MAP[locale] || OG_LOCALE_MAP[defaultLocale];

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: buildLanguageAlternates(ABOUT_SLUG, locale),
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: pageUrl,
      siteName: SITE_NAME,
      locale: ogLocale,
      type: "article",
      images: [
        {
          url: OG_IMAGE,
          width: 512,
          height: 512,
          alt: "HEIC JPG Now logo",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [OG_IMAGE],
    },
  };
}
