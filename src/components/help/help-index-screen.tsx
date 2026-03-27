import Link from "next/link";
import { TranslationProvider } from "@/components/i18n/translation-provider";
import { GlobalLayout } from "@/components/layout/global-layout";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getHelpIndex, getHelpPages } from "@/lib/help-center/content";
import { getHelpUiCopy } from "@/lib/help-center/ui-copy";
import { defaultLocale, type Locale } from "@/lib/i18n/locales";
import { getLocalePath } from "@/lib/i18n/paths";
import { getAbsoluteUrl } from "@/lib/url";

type HelpIndexScreenProps = {
  locale: Locale;
};

export async function HelpIndexScreen({ locale }: HelpIndexScreenProps) {
  const messages = await getDictionary(locale);
  const helpIndex = getHelpIndex(locale);
  const helpPages = getHelpPages(locale);
  const ui = getHelpUiCopy(locale);

  if (!helpIndex || helpPages.length === 0) {
    return null;
  }

  const site = messages.common.site;
  const footer = messages.common.footer;
  const converterPath = locale === defaultLocale ? "/#converter" : `/${locale}#converter`;
  const homeBreadcrumbLabel = site.breadcrumb?.home ?? site.name ?? "Home";
  const localePrefix = locale === defaultLocale ? "" : `/${locale}`;
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeBreadcrumbLabel,
        item: getAbsoluteUrl(localePrefix),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: helpIndex.title,
        item: getAbsoluteUrl(`${localePrefix}/help`),
      },
    ],
  };
  const breadcrumbItems = [
    { key: "home", label: homeBreadcrumbLabel, href: "" },
    { key: "help", label: helpIndex.title },
  ];

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
        footerContactLabel={footer.contact.label}
      >
        <article className="mx-auto max-w-4xl space-y-12 py-6">
          <Breadcrumbs locale={locale} items={breadcrumbItems} />

          <section className="rounded-md border border-emerald-100 bg-white/80 p-8 shadow-sm">
            <p className="text-sm font-medium text-emerald-600">{ui.badge}</p>
            <h1 className="mt-3 text-3xl font-bold text-slate-900">{helpIndex.title}</h1>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-700">
              {helpIndex.intro.map((paragraph, index) => (
                <p key={`intro-${index}`}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">{ui.browseTopics}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {helpPages.map((page) => (
                <Link
                  key={page.slug}
                  href={getLocalePath(locale, `help/${page.slug}`)}
                  className="rounded-md border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:border-emerald-500 hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold text-slate-900">{page.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-700">{page.summary}</p>
                  <p className="mt-4 text-sm font-medium text-emerald-600">{ui.readMore}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-md border border-emerald-100 bg-emerald-50/70 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">{ui.continueConvertingTitle}</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              {ui.continueConvertingDescription}
            </p>
            <Link
              href={converterPath}
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              {ui.backToConverter}
            </Link>
          </section>
        </article>
        <JsonLd data={breadcrumbData} />
      </GlobalLayout>
    </TranslationProvider>
  );
}
