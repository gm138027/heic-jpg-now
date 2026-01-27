import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import { UploadQueueProvider } from "@/components/upload/context/upload-queue-provider";
import { GATracker } from "@/components/analytics/ga-tracker";
import { locales, defaultLocale, type Locale } from "@/lib/i18n/locales";
import { getAbsoluteUrl } from "@/lib/url";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getAbsoluteUrl()),
  icons: {
    icon: [
      { url: getAbsoluteUrl("/logo/favicon-16x16.png"), sizes: "16x16", type: "image/png" },
      { url: getAbsoluteUrl("/logo/favicon-32x32.png"), sizes: "32x32", type: "image/png" },
      { url: getAbsoluteUrl("/logo/favicon.ico"), sizes: "any" },
    ],
    apple: [{ url: getAbsoluteUrl("/logo/apple-touch-icon.png"), sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "android-chrome", url: getAbsoluteUrl("/logo/android-chrome-192x192.png"), sizes: "192x192" },
      { rel: "android-chrome", url: getAbsoluteUrl("/logo/android-chrome-512x512.png"), sizes: "512x512" },
    ],
  },
  manifest: getAbsoluteUrl("/logo/site.webmanifest"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

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
        <GATracker />
        <UploadQueueProvider>{children}</UploadQueueProvider>
      </body>
    </html>
  );
}
