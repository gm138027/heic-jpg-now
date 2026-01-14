import type { Metadata } from "next";
import { TermsScreen } from "@/components/terms/terms-screen";
import { defaultLocale } from "@/lib/i18n/locales";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { getAbsoluteUrl } from "@/lib/url";

const TERMS_URL = getAbsoluteUrl("/terms");
const DEFAULT_OG_IMAGE = getAbsoluteUrl("/logo/android-chrome-512x512.png");
const TERMS_TITLE = "利用規約 | HEIC JPG NOW";
const TERMS_DESCRIPTION =
  "HEIC JPG NOW の利用規約。サービスの適用範囲、禁止事項、免責事項、問い合わせ先などを明記しています。";

export const metadata: Metadata = {
  title: TERMS_TITLE,
  description: TERMS_DESCRIPTION,
  alternates: buildLanguageAlternates("terms", defaultLocale),
  openGraph: {
    title: TERMS_TITLE,
    description: TERMS_DESCRIPTION,
    url: TERMS_URL,
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
    title: TERMS_TITLE,
    description: TERMS_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function TermsPage() {
  return <TermsScreen locale={defaultLocale} />;
}
