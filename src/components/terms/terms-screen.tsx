import Link from "next/link";
import { TranslationProvider } from "@/components/i18n/translation-provider";
import { GlobalLayout } from "@/components/layout/global-layout";
import { getDictionary, type TermsDictionary } from "@/lib/i18n/get-dictionary";
import { defaultLocale, type Locale } from "@/lib/i18n/locales";
import { getAbsoluteUrl } from "@/lib/url";
import { JsonLd } from "@/components/seo/json-ld";

type TermsScreenProps = {
  locale: Locale;
};

export async function TermsScreen({ locale }: TermsScreenProps) {
  const messages = await getDictionary(locale);
  const site = messages.common.site;
  const footer = messages.common.footer;
  const terms = messages.terms;
  const sections: TermsDictionary["sections"] =
    Array.isArray(terms.sections) ? terms.sections : [];
  const tocItems =
    Array.isArray(terms.toc) && terms.toc.length > 0
      ? terms.toc
      : sections.map((section, index) => ({
          id: `terms-section-${index + 1}`,
          label: section.title,
        }));
  const localePrefix = locale === defaultLocale ? "" : `/${locale}`;
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "HEIC JPG Now",
        item: getAbsoluteUrl(localePrefix),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: terms.hero.title,
        item: getAbsoluteUrl(`${localePrefix}/terms`),
      },
    ],
  };

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
        <article className="mx-auto max-w-4xl space-y-12 py-6">
          <section className="rounded-3xl border border-emerald-100 bg-white/80 p-8 shadow-sm">
            <p className="text-sm font-medium text-emerald-600">{terms.hero.updated}</p>
            <h1 className="mt-3 text-3xl font-bold text-slate-900">{terms.hero.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-slate-700">{terms.hero.description}</p>
          </section>

          {terms.tocTitle && tocItems.length > 0 && (
            <nav className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                {terms.tocTitle}
              </p>
              <ul className="mt-4 space-y-2 text-base text-slate-700">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`#${item.id}`}
                      className="inline-flex items-center gap-2 text-slate-700 hover:text-emerald-600"
                    >
                      <span className="text-emerald-500" aria-hidden="true">
                        •
                      </span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {sections.map((section, index) => {
            const sectionId = tocItems[index]?.id ?? `terms-section-${index + 1}`;
            return (
              <section
                key={`${section.title}-${index}`}
                id={sectionId}
                className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm"
              >
                <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
                {section.body?.map((paragraph: string, i: number) => (
                  <p key={`body-${i}`} className="mt-4 text-base leading-relaxed text-slate-700">
                    {paragraph}
                  </p>
                ))}
                {Array.isArray(section.list) && section.list.length > 0 && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-slate-700">
                    {section.list.map((item: string, i: number) => (
                      <li key={`list-${i}`}>{item}</li>
                    ))}
                  </ul>
                )}
                {Array.isArray(section.notes) && section.notes.length > 0 && (
                  <div className="mt-4 rounded-lg bg-slate-50 p-4 text-sm text-slate-600">
                    {section.notes.map((note: string, i: number) => (
                      <p key={`note-${i}`} className={i > 0 ? "mt-2" : undefined}>
                        {note}
                      </p>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </article>
        <JsonLd data={breadcrumbData} />
      </GlobalLayout>
    </TranslationProvider>
  );
}
