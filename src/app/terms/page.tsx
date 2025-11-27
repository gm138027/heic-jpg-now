import type { Metadata } from "next";
import { TermsScreen } from "@/components/terms/terms-screen";
import { defaultLocale } from "@/lib/i18n/locales";
import { buildLanguageAlternates } from "@/lib/seo/alternates";

export const metadata: Metadata = {
  title: "利用規約 | HEIC JPG NOW",
  description:
    "HEIC JPG NOW の利用規約。サービスの適用範囲、禁止事項、免責事項、問い合わせ先などを明記しています。",
  alternates: buildLanguageAlternates("terms", defaultLocale),
};

export default function TermsPage() {
  return <TermsScreen locale={defaultLocale} />;
}
