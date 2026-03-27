import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HelpPageScreen } from "@/components/help/help-page-screen";
import { getHelpPage, getHelpPages } from "@/lib/help-center/content";
import { buildHelpPageMetadata } from "@/lib/help-center/metadata";
import { defaultLocale } from "@/lib/i18n/locales";

type HelpDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getHelpPages(defaultLocale).map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: HelpDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getHelpPage(defaultLocale, slug);

  if (!page) {
    return {};
  }

  return buildHelpPageMetadata(page, defaultLocale);
}

export default async function HelpDetailPage({
  params,
}: HelpDetailPageProps) {
  const { slug } = await params;
  const page = getHelpPage(defaultLocale, slug);

  if (!page) {
    notFound();
  }

  return <HelpPageScreen locale={defaultLocale} page={page} />;
}
