import type { Metadata } from "next";
import { HelpIndexScreen } from "@/components/help/help-index-screen";
import { getHelpIndex } from "@/lib/help-center/content";
import { buildHelpIndexMetadata } from "@/lib/help-center/metadata";
import { defaultLocale } from "@/lib/i18n/locales";

const helpIndex = getHelpIndex(defaultLocale);

export const metadata: Metadata = helpIndex ? buildHelpIndexMetadata(helpIndex, defaultLocale) : {};

export default function HelpIndexPage() {
  return <HelpIndexScreen locale={defaultLocale} />;
}
