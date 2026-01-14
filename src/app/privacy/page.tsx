import type { Metadata } from "next";
import { PrivacyScreen } from "@/components/privacy/privacy-screen";
import { defaultLocale } from "@/lib/i18n/locales";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { getAbsoluteUrl } from "@/lib/url";

const PRIVACY_URL = getAbsoluteUrl("/privacy");
const DEFAULT_OG_IMAGE = getAbsoluteUrl("/logo/android-chrome-512x512.png");
const PRIVACY_TITLE = "プライバシーポリシー | HEIC JPG NOW";
const PRIVACY_DESCRIPTION =
  "HEIC JPG NOWのプライバシーポリシー。ブラウザ内で完結する HEIC→JPG 変換ツールとして、利用情報の取り扱いやセキュリティ対策を明記しています。";

export const metadata: Metadata = {
  title: PRIVACY_TITLE,
  description: PRIVACY_DESCRIPTION,
  alternates: buildLanguageAlternates("privacy", defaultLocale),
  openGraph: {
    title: PRIVACY_TITLE,
    description: PRIVACY_DESCRIPTION,
    url: PRIVACY_URL,
    siteName: "HEIC JPG Now",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 512,
        height: 512,
        alt: "HEIC JPG Now logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: PRIVACY_TITLE,
    description: PRIVACY_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function PrivacyPage() {
  return <PrivacyScreen locale={defaultLocale} />;
}
