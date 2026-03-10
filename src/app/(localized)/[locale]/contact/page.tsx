import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactScreen } from "@/components/contact/contact-screen";
import { getContactDictionary } from "@/lib/i18n/get-contact-dictionary";
import { locales, defaultLocale, type Locale } from "@/lib/i18n/locales";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { OG_LOCALE_MAP } from "@/lib/site-config";
import { getAbsoluteUrl } from "@/lib/url";

const secondaryLocales = locales.filter((locale) => locale !== defaultLocale);
const OG_IMAGE = getAbsoluteUrl("/logo/android-chrome-512x512.png");

type LocaleContactPageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export function generateStaticParams() {
  return secondaryLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!secondaryLocales.includes(locale)) {
    return {};
  }

  const dictionary = await getContactDictionary(locale);
  const hero = dictionary.hero;
  const title = hero?.title ?? "Contact Us";
  const description =
    hero?.description ??
    "Contact HEIC JPG NOW for support questions, bug reports, and policy-related requests.";
  const path = locale === defaultLocale ? "/contact" : `/${locale}/contact`;
  const pageUrl = getAbsoluteUrl(path);
  const ogLocale = OG_LOCALE_MAP[locale] || "en_US";
  const fullTitle = `${title} | HEIC JPG NOW`;

  return {
    // Keep legal/trust pages focused on clarity. Meta keywords are intentionally omitted.
    title: fullTitle,
    description,
    alternates: buildLanguageAlternates("contact", locale),
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

export default async function LocaleContactPage({
  params,
}: LocaleContactPageProps) {
  const { locale } = await params;
  if (!secondaryLocales.includes(locale)) {
    notFound();
  }
  return <ContactScreen locale={locale} />;
}
