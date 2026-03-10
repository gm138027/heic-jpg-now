import type { Metadata } from "next";
import { ContactScreen } from "@/components/contact/contact-screen";
import { defaultLocale } from "@/lib/i18n/locales";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { getAbsoluteUrl } from "@/lib/url";

const CONTACT_URL = getAbsoluteUrl("/contact");
const DEFAULT_OG_IMAGE = getAbsoluteUrl("/logo/android-chrome-512x512.png");
const CONTACT_TITLE = "お問い合わせ | HEIC JPG NOW";
const CONTACT_DESCRIPTION =
  "HEIC JPG NOW へのお問い合わせ窓口です。ご質問・不具合報告・ご提案・権利関係のご連絡はこちらからお送りください。";

export const metadata: Metadata = {
  // Keep legal/trust pages focused on clarity. Meta keywords are intentionally omitted.
  title: CONTACT_TITLE,
  description: CONTACT_DESCRIPTION,
  alternates: buildLanguageAlternates("contact", defaultLocale),
  openGraph: {
    title: CONTACT_TITLE,
    description: CONTACT_DESCRIPTION,
    url: CONTACT_URL,
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
    title: CONTACT_TITLE,
    description: CONTACT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ContactPage() {
  return <ContactScreen locale={defaultLocale} />;
}
