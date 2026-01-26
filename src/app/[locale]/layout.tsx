import type { ReactNode } from "react";
import { locales, defaultLocale, type Locale } from "@/lib/i18n/locales";

type LocaleLayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const lang = locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;

  return (
    <div lang={lang}>{children}</div>
  );
}
