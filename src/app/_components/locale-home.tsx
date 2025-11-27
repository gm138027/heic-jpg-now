import { GlobalLayout } from "@/components/layout/global-layout";
import { TranslationProvider } from "@/components/i18n/translation-provider";
import { SEOContent } from "@/components/seo/seo-content";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { type Locale } from "@/lib/i18n/locales";

type LocaleHomeProps = {
  locale: Locale;
};

export async function LocaleHome({ locale }: LocaleHomeProps) {
  const messages = await getDictionary(locale);
  const site = messages.common.site;
  const footer = messages.common.footer;

  return (
    <TranslationProvider locale={locale} messages={messages}>
      <GlobalLayout
        locale={locale}
        languageLabel={site.language.label}
        languageOptions={{
          ja: site.language.ja,
          en: site.language.en,
          es: site.language.es,
          fr: site.language.fr,
          de: site.language.de,
          pt: site.language.pt,
        }}
        footerTagline={footer.tagline}
        footerLegal={footer.legal}
      >
        <SEOContent locale={locale} />
      </GlobalLayout>
    </TranslationProvider>
  );
}
