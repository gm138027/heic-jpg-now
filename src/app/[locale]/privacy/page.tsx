import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrivacyScreen } from "@/components/privacy/privacy-screen";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { locales, defaultLocale, type Locale } from "@/lib/i18n/locales";
import { buildLanguageAlternates } from "@/lib/seo/alternates";

const secondaryLocales = locales.filter((locale) => locale !== defaultLocale);

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
  return {
    title: `${title} | HEIC JPG NOW`,
    description,
    alternates: buildLanguageAlternates("privacy", locale),
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
