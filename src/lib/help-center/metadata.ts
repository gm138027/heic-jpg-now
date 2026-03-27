import type { Metadata } from "next";
import { defaultLocale, type Locale } from "@/lib/i18n/locales";
import { OG_LOCALE_MAP } from "@/lib/site-config";
import { getAbsoluteUrl } from "@/lib/url";
import { getHelpLocales, type HelpIndex, type HelpPage } from "./content";

const OG_IMAGE = getAbsoluteUrl("/logo/android-chrome-512x512.png");
const SITE_NAME = "HEIC JPG Now";

function normalizePath(path: string) {
  const trimmed = path.replace(/^\/+/, "");
  return trimmed ? `/${trimmed}` : "";
}

function buildHelpAlternates(path: string, locale: Locale) {
  const slug = normalizePath(path);
  const canonical = locale === defaultLocale ? slug || "/" : `/${locale}${slug || ""}`;
  const languages = getHelpLocales().reduce<Record<string, string>>((acc, helpLocale) => {
    acc[helpLocale] =
      helpLocale === defaultLocale ? slug || "/" : `/${helpLocale}${slug || ""}`;
    return acc;
  }, {});

  languages["x-default"] = slug || "/";

  return {
    canonical,
    languages,
  };
}

export function buildHelpIndexMetadata(helpIndex: HelpIndex, locale: Locale): Metadata {
  const path = "help";
  const pagePath = locale === defaultLocale ? "/help" : `/${locale}/help`;
  const pageUrl = getAbsoluteUrl(pagePath);
  const ogLocale = OG_LOCALE_MAP[locale] || OG_LOCALE_MAP[defaultLocale];

  return {
    title: helpIndex.metaTitle,
    description: helpIndex.metaDescription,
    alternates: buildHelpAlternates(path, locale),
    openGraph: {
      title: helpIndex.metaTitle,
      description: helpIndex.metaDescription,
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
      title: helpIndex.metaTitle,
      description: helpIndex.metaDescription,
      images: [OG_IMAGE],
    },
  };
}

export function buildHelpPageMetadata(page: HelpPage, locale: Locale): Metadata {
  const path = `help/${page.slug}`;
  const pageTitle = `${page.title} | HEIC JPG NOW`;
  const pagePath = locale === defaultLocale ? `/${path}` : `/${locale}/${path}`;
  const pageUrl = getAbsoluteUrl(pagePath);
  const ogLocale = OG_LOCALE_MAP[locale] || OG_LOCALE_MAP[defaultLocale];

  return {
    title: pageTitle,
    description: page.metaDescription,
    alternates: buildHelpAlternates(path, locale),
    openGraph: {
      title: pageTitle,
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
      title: pageTitle,
      description: page.metaDescription,
      images: [OG_IMAGE],
    },
  };
}
