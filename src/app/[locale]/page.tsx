import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleHome } from "../_components/locale-home";
import { locales, defaultLocale, type Locale } from "@/lib/i18n/locales";
import { buildLanguageAlternates } from "@/lib/seo/alternates";

type LocalePageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

const secondaryLocales = locales.filter((locale) => locale !== defaultLocale);

export function generateStaticParams() {
  return secondaryLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  const metadataByLocale: Record<Locale, Metadata> = {
    ja: {
      title: "HEIC JPG 変換 - オンライン・無料・一括｜HEIC JPG Now",
      description:
        "無料の HEIC JPG 変換ツール。複数の HEIC ファイルを JPG に一括変換。ブラウザ内で完結し、安全・高速・高品質。ダウンロードや登録不要。iPhone・Windows・Mac 対応。",
      keywords:
        "heic jpg 変換, heic jpg 変換 無料, heic jpg 変換 一括, heic jpg 変換 オンライン, heic to jpg 日本語, heic jpg now",
    },
    en: {
      title: "HEIC to JPG Converter - Free Online Tool | Batch Conversion",
      description:
        "Convert HEIC to JPG for free with our online converter. Batch conversion supported. Everything runs in your browser—no uploads, complete privacy. Works on iPhone, Windows, and Mac.",
      keywords:
        "heic to jpg converter, how to convert heic to jpg, change heic to jpg, free heic to jpg converter, converting heic to jpg, heic to jpg online, batch heic to jpg, convert heic to jpg free",
    },
    es: {
      title: "Convertidor de HEIC a JPG - Gratis en Línea | Por Lotes",
      description:
        "Convierte HEIC a JPG gratis. Conversión por lotes, sin cargas, privacidad total. Funciona en tu navegador. Compatible con iPhone, Windows y Mac.",
      keywords:
        "convertidor de heic a jpg, de heic a jpg, pasar de heic a jpg, convertir de heic a jpg, conversor de heic a jpg, cambiar formato heic a jpg, transformar heic a jpg, heic a jpg gratis",
    },
    fr: {
      title: "Convertir HEIC en JPG - Gratuit en Ligne | Par Lots",
      description:
        "Convertissez HEIC en JPG gratuitement. Conversion par lots, aucun téléchargement. Fonctionne dans votre navigateur. iPhone, Windows, Mac.",
      keywords:
        "convertir heic en jpg, heic en jpg, heic en jpg gratuit, convertisseur heic en jpg, format heic en jpg, photo heic en jpg, conversion heic en jpg, transformer heic en jpg",
    },
    de: {
      title: "HEIC zu JPG Umwandeln - Kostenlos Online | Batch",
      description:
        "Wandeln Sie HEIC kostenlos zu JPG um. Batch-Konvertierung, keine Uploads. Funktioniert im Browser. iPhone, Windows, Mac kompatibel.",
      keywords:
        "heic zu jpg umwandeln, heic zu jpg, von heic zu jpg, heic zu jpg konverter, heic zu jpg konvertieren, heic zu jpg kostenlos, heic umwandeln",
    },
    pt: {
      title: "Transformar HEIC para JPG - Grátis Online | Em Lote",
      description:
        "Converta HEIC para JPG grátis. Conversão em lote, sem uploads. Funciona no navegador. Compatível com iPhone, Windows e Mac.",
      keywords:
        "transformar de heic para jpg, converter arquivo heic para jpg, de heic para jpg, converter heic para jpg grátis, conversor de heic para jpg, converter foto heic para jpg, como converter heic para jpg, heic para jpg",
    },
  };

  const baseMetadata = metadataByLocale[locale] || metadataByLocale.en;
  return {
    ...baseMetadata,
    alternates: buildLanguageAlternates("", locale),
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale: localeParam } = await params;
  if (!secondaryLocales.includes(localeParam)) {
    notFound();
  }
  return <LocaleHome locale={localeParam} />;
}
