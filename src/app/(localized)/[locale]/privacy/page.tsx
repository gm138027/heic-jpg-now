import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrivacyScreen } from "@/components/privacy/privacy-screen";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { locales, defaultLocale, type Locale } from "@/lib/i18n/locales";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { OG_LOCALE_MAP } from "@/lib/site-config";
import { getAbsoluteUrl } from "@/lib/url";

const secondaryLocales = locales.filter((locale) => locale !== defaultLocale);
const OG_IMAGE = getAbsoluteUrl("/logo/android-chrome-512x512.png");

type LocalePrivacyPageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export function generateStaticParams() {
  return secondaryLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocalePrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!secondaryLocales.includes(locale)) {
    return {};
  }
  const dictionary = await getDictionary(locale);
  const hero = dictionary.privacy?.hero;
  const title = hero?.title ?? "Privacy Policy";
  const description =
    hero?.description ??
    "Privacy policy for HEIC JPG NOW. Learn how we handle analytics and uploaded files.";
  const path = locale === defaultLocale ? "/privacy" : `/${locale}/privacy`;
  const pageUrl = getAbsoluteUrl(path);
  const ogLocale = OG_LOCALE_MAP[locale] || "en_US";
  const fullTitle = `${title} | HEIC JPG NOW`;

  return {
    // Intentionally omit meta keywords for legal pages.
    // Google does not use meta keywords for ranking, and legal pages are not keyword targets.
    title: fullTitle,
    description,
    alternates: buildLanguageAlternates("privacy", locale),
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

export default async function LocalePrivacyPage({
  params,
}: LocalePrivacyPageProps) {
  const { locale } = await params;
  if (!secondaryLocales.includes(locale)) {
    notFound();
  }
  return <PrivacyScreen locale={locale} />;
}
