import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HelpPageScreen } from "@/components/help/help-page-screen";
import { getHelpPage, getHelpPages, getHelpLocales } from "@/lib/help-center/content";
import { buildHelpPageMetadata } from "@/lib/help-center/metadata";
import { defaultLocale, type Locale } from "@/lib/i18n/locales";

const localizedHelpLocales = getHelpLocales().filter((locale) => locale !== defaultLocale);

type LocalizedHelpDetailPageProps = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedHelpLocales.flatMap((locale) =>
    getHelpPages(locale).map((page) => ({
      locale,
      slug: page.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: LocalizedHelpDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!localizedHelpLocales.includes(locale)) {
    return {};
  }

  const page = getHelpPage(locale, slug);
  return page ? buildHelpPageMetadata(page, locale) : {};
}

export default async function LocalizedHelpDetailPage({
  params,
}: LocalizedHelpDetailPageProps) {
  const { locale, slug } = await params;
  if (!localizedHelpLocales.includes(locale)) {
    notFound();
  }

  const page = getHelpPage(locale, slug);
  if (!page) {
    notFound();
  }

  return <HelpPageScreen locale={locale} page={page} />;
}
