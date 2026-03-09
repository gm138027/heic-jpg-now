import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import { UploadQueueProvider } from "@/components/upload/context/upload-queue-provider";
import { GATracker } from "@/components/analytics/ga-tracker";
import { locales, defaultLocale, type Locale } from "@/lib/i18n/locales";
import { rootLayoutMetadata } from "@/lib/seo/root-layout-metadata";
import { LocaleSessionWriter } from "@/components/i18n/locale-session-writer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = rootLayoutMetadata;

type LocaleLayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const lang = locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;

  return (
    <html lang={lang}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LocaleSessionWriter locale={lang} />
        <GATracker />
        <UploadQueueProvider>{children}</UploadQueueProvider>
      </body>
    </html>
  );
}
