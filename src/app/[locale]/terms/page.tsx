import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TermsScreen } from "@/components/terms/terms-screen";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { locales, defaultLocale, type Locale } from "@/lib/i18n/locales";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { getAbsoluteUrl } from "@/lib/url";

const secondaryLocales = locales.filter((locale) => locale !== defaultLocale);
const OG_IMAGE = getAbsoluteUrl("/logo/android-chrome-512x512.png");
const ogLocaleMap: Record<Locale, string> = {
  ja: "ja_JP",
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
  de: "de_DE",
  pt: "pt_PT",
};

type LocaleTermsPageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export function generateStaticParams() {
  return secondaryLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleTermsPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!secondaryLocales.includes(locale)) {
    return {};
  }
  const dictionary = await getDictionary(locale);
  const hero = dictionary.terms?.hero;
  const title = hero?.title ?? "Terms of Service";
  const description =
    hero?.description ??
    "Terms of Service for HEIC JPG NOW. Review usage scope, restrictions, and contact information.";
  const path = locale === defaultLocale ? "/terms" : `/${locale}/terms`;
  const pageUrl = getAbsoluteUrl(path);
  const ogLocale = ogLocaleMap[locale] || "en_US";
  const fullTitle = `${title} | HEIC JPG NOW`;

  return {
    title: fullTitle,
    description,
    alternates: buildLanguageAlternates("terms", locale),
    openGraph: {
      title: fullTitle,
      description,
      url: pageUrl,
      siteName: "HEIC JPG Now",
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
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}

export default async function LocaleTermsPage({
  params,
}: LocaleTermsPageProps) {
  const { locale } = await params;
  if (!secondaryLocales.includes(locale)) {
    notFound();
  }
  return <TermsScreen locale={locale} />;
}
