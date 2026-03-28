import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutScreen } from "@/components/about/about-screen";
import { getAboutLocales, getAboutPage } from "@/lib/about/content";
import { buildAboutMetadata } from "@/lib/about/metadata";
import { locales, defaultLocale, type Locale } from "@/lib/i18n/locales";

const secondaryLocales = locales.filter((locale) => locale !== defaultLocale);
const localizedAboutLocales = getAboutLocales().filter((locale) => locale !== defaultLocale);

type LocalizedAboutPageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedAboutLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocalizedAboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!secondaryLocales.includes(locale) || !localizedAboutLocales.includes(locale)) {
    return {};
  }

  return buildAboutMetadata(getAboutPage(locale), locale);
}

export default async function LocalizedAboutPage({
  params,
}: LocalizedAboutPageProps) {
  const { locale } = await params;
  if (!secondaryLocales.includes(locale) || !localizedAboutLocales.includes(locale)) {
    notFound();
  }

  return <AboutScreen locale={locale} />;
}
