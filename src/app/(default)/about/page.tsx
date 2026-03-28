import { AboutScreen } from "@/components/about/about-screen";
import { getAboutPage } from "@/lib/about/content";
import { buildAboutMetadata } from "@/lib/about/metadata";
import { defaultLocale } from "@/lib/i18n/locales";

export const metadata = buildAboutMetadata(getAboutPage(defaultLocale), defaultLocale);

export default function AboutPage() {
  return <AboutScreen locale={defaultLocale} />;
}
