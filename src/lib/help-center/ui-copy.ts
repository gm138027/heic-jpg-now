import { defaultLocale, type Locale } from "@/lib/i18n/locales";

export type HelpUiCopy = {
  badge: string;
  viewIndex: string;
  readMore: string;
  browseTopics: string;
  continueConvertingTitle: string;
  continueConvertingDescription: string;
  backToConverter: string;
  toc: string;
  nextSteps: string;
};

const HELP_UI_COPY: Partial<Record<Locale, HelpUiCopy>> = {
  ja: {
    badge: "ヘルプ",
    viewIndex: "ヘルプ一覧を見る",
    readMore: "詳しく見る",
    browseTopics: "項目一覧",
    continueConvertingTitle: "変換を続ける場合",
    continueConvertingDescription:
      "すぐに変換へ戻りたい場合は、ツールに戻ってそのまま続けられます。",
    backToConverter: "変換ツールに戻る",
    toc: "目次",
    nextSteps: "次に確認したいこと",
  },
  en: {
    badge: "Help",
    viewIndex: "View all Help topics",
    readMore: "Read more",
    browseTopics: "Browse topics",
    continueConvertingTitle: "Back to conversion",
    continueConvertingDescription:
      "If you are ready to keep converting, go back to the tool and continue from there.",
    backToConverter: "Go to converter",
    toc: "Table of contents",
    nextSteps: "Next steps",
  },
  es: {
    badge: "Ayuda",
    viewIndex: "Ver todos los temas de ayuda",
    readMore: "Leer más",
    browseTopics: "Temas de ayuda",
    continueConvertingTitle: "Seguir convirtiendo",
    continueConvertingDescription:
      "Si quieres volver a convertir de inmediato, puedes regresar a la herramienta y seguir desde ahí.",
    backToConverter: "Volver al convertidor",
    toc: "Índice",
    nextSteps: "Qué revisar después",
  },
  fr: {
    badge: "Aide",
    viewIndex: "Voir tous les sujets d'aide",
    readMore: "En savoir plus",
    browseTopics: "Sujets d'aide",
    continueConvertingTitle: "Continuer la conversion",
    continueConvertingDescription:
      "Si vous voulez revenir tout de suite à la conversion, retournez à l'outil et reprenez depuis là.",
    backToConverter: "Retourner au convertisseur",
    toc: "Sommaire",
    nextSteps: "Que vérifier ensuite",
  },
  de: {
    badge: "Hilfe",
    viewIndex: "Alle Hilfethemen ansehen",
    readMore: "Mehr erfahren",
    browseTopics: "Hilfethemen",
    continueConvertingTitle: "Konvertierung fortsetzen",
    continueConvertingDescription:
      "Wenn Sie direkt zur Konvertierung zurückkehren möchten, gehen Sie zum Tool zurück und machen dort weiter.",
    backToConverter: "Zum Konverter zurück",
    toc: "Inhaltsverzeichnis",
    nextSteps: "Was Sie als Nächstes prüfen können",
  },
  pt: {
    badge: "Ajuda",
    viewIndex: "Ver todos os tópicos de ajuda",
    readMore: "Saiba mais",
    browseTopics: "Tópicos de ajuda",
    continueConvertingTitle: "Continuar convertendo",
    continueConvertingDescription:
      "Se quiser voltar direto para a conversão, volte para a ferramenta e continue dali.",
    backToConverter: "Voltar ao conversor",
    toc: "Índice",
    nextSteps: "O que verificar em seguida",
  },
};

export function getHelpUiCopy(locale: Locale): HelpUiCopy {
  return HELP_UI_COPY[locale] ?? HELP_UI_COPY[defaultLocale]!;
}
