import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleHome } from "@/app/_components/locale-home";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { locales, defaultLocale, type Locale } from "@/lib/i18n/locales";
import { buildHomeMetadata } from "@/lib/seo/home-metadata";

type LocalePageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

const secondaryLocales = locales.filter((locale) => locale !== defaultLocale);

export function generateStaticParams() {
  return secondaryLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!secondaryLocales.includes(locale)) {
    return {};
  }
  const dictionary = await getDictionary(locale);
  return buildHomeMetadata(locale, dictionary);
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale: localeParam } = await params;
  if (!secondaryLocales.includes(localeParam)) {
    notFound();
  }
  return <LocaleHome locale={localeParam} />;
}
