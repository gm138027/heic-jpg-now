
import type { ReactNode } from "react";
import { locales, defaultLocale, type Locale } from "@/lib/i18n/locales";

export default function LocaleLayout({ children, params }: { children: ReactNode; params: { locale: Locale } }) {
  const { locale } = params;
  const lang = locales.includes(locale) ? locale : defaultLocale;
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
