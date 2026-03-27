import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HelpIndexScreen } from "@/components/help/help-index-screen";
import { getHelpIndex, getHelpLocales } from "@/lib/help-center/content";
import { buildHelpIndexMetadata } from "@/lib/help-center/metadata";
import { defaultLocale, type Locale } from "@/lib/i18n/locales";

const localizedHelpLocales = getHelpLocales().filter((locale) => locale !== defaultLocale);

type LocalizedHelpIndexPageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedHelpLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocalizedHelpIndexPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!localizedHelpLocales.includes(locale)) {
    return {};
  }

  const helpIndex = getHelpIndex(locale);
  return helpIndex ? buildHelpIndexMetadata(helpIndex, locale) : {};
}

export default async function LocalizedHelpIndexPage({ params }: LocalizedHelpIndexPageProps) {
  const { locale } = await params;
  if (!localizedHelpLocales.includes(locale) || !getHelpIndex(locale)) {
    notFound();
  }

  return <HelpIndexScreen locale={locale} />;
}
