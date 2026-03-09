import type { Metadata } from "next";
import { LocaleHome } from "@/app/_components/locale-home";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { defaultLocale } from "@/lib/i18n/locales";
import { buildHomeMetadata } from "@/lib/seo/home-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary(defaultLocale);
  return buildHomeMetadata(defaultLocale, dictionary);
}

export default function RootPage() {
  return <LocaleHome locale={defaultLocale} />;
}
