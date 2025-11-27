import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TermsScreen } from "@/components/terms/terms-screen";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { locales, defaultLocale, type Locale } from "@/lib/i18n/locales";
import { buildLanguageAlternates } from "@/lib/seo/alternates";

const secondaryLocales = locales.filter((locale) => locale !== defaultLocale);

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
  return {
    title: `${title} | HEIC JPG NOW`,
    description,
    alternates: buildLanguageAlternates("terms", locale),
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
