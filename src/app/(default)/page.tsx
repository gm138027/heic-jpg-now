import { LocaleHome } from "@/app/_components/locale-home";
import { defaultLocale } from "@/lib/i18n/locales";

export default function RootPage() {
  return <LocaleHome locale={defaultLocale} />;
}
