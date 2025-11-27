import type { Metadata } from "next";
import { PrivacyScreen } from "@/components/privacy/privacy-screen";
import { defaultLocale } from "@/lib/i18n/locales";
import { buildLanguageAlternates } from "@/lib/seo/alternates";

export const metadata: Metadata = {
  title: "プライバシーポリシー | HEIC JPG NOW",
  description:
    "HEIC JPG NOWのプライバシーポリシー。ブラウザ内で完結する HEIC→JPG 変換ツールとして、利用情報の取り扱いやセキュリティ対策を明記しています。",
  alternates: buildLanguageAlternates("privacy", defaultLocale),
};

export default function PrivacyPage() {
  return <PrivacyScreen locale={defaultLocale} />;
}
