import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { UploadQueueProvider } from "@/components/upload/context/upload-queue-provider";
import { GATracker } from "@/components/analytics/ga-tracker";
import { defaultLocale } from "@/lib/i18n/locales";
import { LanguageAutoRedirect } from "@/components/i18n/language-auto-redirect";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { getAbsoluteUrl } from "@/lib/url";

const BASE_URL = "https://heicjpgnow.com";
const OG_IMAGE = getAbsoluteUrl("/logo/android-chrome-512x512.png");

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "HEIC JPG 変換 - オンライン・無料・一括｜HEIC JPG Now",
  description:
    "無料の HEIC JPG 変換ツール。複数の HEIC ファイルを JPG に一括変換。ブラウザ内で完結し、安全・高速・高品質。ダウンロードや登録不要。iPhone・Windows・Mac 対応。",
  keywords:
    "heic jpg 変換, heic jpg 変換 無料, heic jpg 変換 一括, heic jpg 変換 オンライン, heic to jpg 日本語, heic jpg now",
  alternates: buildLanguageAlternates("", defaultLocale),
  icons: {
    icon: [
      { url: getAbsoluteUrl("/logo/favicon-16x16.png"), sizes: "16x16", type: "image/png" },
      { url: getAbsoluteUrl("/logo/favicon-32x32.png"), sizes: "32x32", type: "image/png" },
      { url: getAbsoluteUrl("/logo/favicon.ico"), sizes: "any" },
    ],
    apple: [{ url: getAbsoluteUrl("/logo/apple-touch-icon.png"), sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "android-chrome", url: getAbsoluteUrl("/logo/android-chrome-192x192.png"), sizes: "192x192" },
      { rel: "android-chrome", url: OG_IMAGE, sizes: "512x512" },
    ],
  },
  manifest: getAbsoluteUrl("/logo/site.webmanifest"),
  openGraph: {
    title: "HEIC JPG 変換 - オンライン・無料・一括｜HEIC JPG Now",
    description:
      "無料の HEIC JPG 変換ツール。複数の HEIC ファイルを JPG に一括変換。ブラウザ内で完結し、安全・高速・高品質。ダウンロードや登録不要。iPhone・Windows・Mac 対応。",
    url: BASE_URL,
    siteName: "HEIC JPG Now",
    images: [
      {
        url: OG_IMAGE,
        width: 512,
        height: 512,
        alt: "HEIC JPG Now logo",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "HEIC JPG 変換 - オンライン・無料・一括｜HEIC JPG Now",
    description:
      "無料の HEIC JPG 変換ツール。複数の HEIC ファイルを JPG に一括変換。ブラウザ内で完結し、安全・高速・高品質。ダウンロードや登録不要。iPhone・Windows・Mac 対応。",
    images: [OG_IMAGE],
  },
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

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={defaultLocale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageAutoRedirect />
        <GATracker />
        <UploadQueueProvider>{children}</UploadQueueProvider>
      </body>
    </html>
  );
}
