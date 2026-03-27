import Link from "next/link";
import { TranslationProvider } from "@/components/i18n/translation-provider";
import { GlobalLayout } from "@/components/layout/global-layout";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import {
  getHelpIndex,
  getHelpPages,
  type HelpListItem,
  type HelpPage,
} from "@/lib/help-center/content";
import { getHelpUiCopy } from "@/lib/help-center/ui-copy";
import { defaultLocale, type Locale } from "@/lib/i18n/locales";
import { getLocalePath } from "@/lib/i18n/paths";
import { getAbsoluteUrl } from "@/lib/url";

type HelpPageScreenProps = {
  locale: Locale;
  page: HelpPage;
};

function renderHelpListItem(item: HelpListItem) {
  if (typeof item === "string") {
    return item;
  }

  return (
    <span className="block">
      <span className="font-semibold text-slate-900">{item.title}</span>
      {item.description ? <span className="mt-1 block">{item.description}</span> : null}
    </span>
  );
}

export async function HelpPageScreen({ locale, page }: HelpPageScreenProps) {
  const messages = await getDictionary(locale);
  const helpIndex = getHelpIndex(locale);
  const helpPages = getHelpPages(locale);
  const ui = getHelpUiCopy(locale);
  const site = messages.common.site;
  const footer = messages.common.footer;
  const converterPath = locale === defaultLocale ? "/#converter" : `/${locale}#converter`;
  const relatedPages = page.relatedSlugs
    .map((slug) => helpPages.find((item) => item.slug === slug))
    .filter((item): item is HelpPage => item !== undefined);
  const tocItems = page.sections.map((section, index) => ({
    id: `help-section-${index + 1}`,
    label: section.title,
  }));
  const localePrefix = locale === defaultLocale ? "" : `/${locale}`;
  const homeBreadcrumbLabel = site.breadcrumb?.home ?? site.name ?? "Home";
  const helpLabel = helpIndex?.title ?? ui.badge;
  const helpUrl = `${localePrefix}/help`;
  const pageUrl = `${helpUrl}/${page.slug}`;
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
        name: helpLabel,
        item: getAbsoluteUrl(helpUrl),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: getAbsoluteUrl(pageUrl),
      },
    ],
  };
  const breadcrumbItems = [
    { key: "home", label: homeBreadcrumbLabel, href: "" },
    { key: "help", label: helpLabel, href: "help" },
    { key: page.slug, label: page.title },
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
            <h1 className="mt-3 text-3xl font-bold text-slate-900">{page.title}</h1>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-700">
              {page.intro.map((paragraph, index) => (
                <p key={`intro-${index}`}>{paragraph}</p>
              ))}
            </div>
          </section>

          {tocItems.length > 0 && (
            <nav className="rounded-md border border-slate-200 bg-white/70 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                {ui.toc}
              </p>
              <ul className="mt-4 space-y-2 text-base text-slate-700">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`#${item.id}`}
                      className="inline-flex items-center gap-2 text-slate-700 hover:text-emerald-600"
                    >
                      <span className="text-emerald-500" aria-hidden="true">
                        &gt;
                      </span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {page.sections.map((section, index) => {
            const sectionId = tocItems[index]?.id ?? `help-section-${index + 1}`;

            return (
              <section
                key={`${section.title}-${index}`}
                id={sectionId}
                className="scroll-mt-24 rounded-md border border-slate-200 bg-white/90 p-6 shadow-sm"
              >
                <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
                {section.paragraphs?.map((paragraph, i) => (
                  <p key={`paragraph-${i}`} className="mt-4 text-base leading-relaxed text-slate-700">
                    {paragraph}
                  </p>
                ))}
                {section.list && section.list.length > 0 && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-slate-700">
                    {section.list.map((item, i) => (
                      <li key={`list-${i}`}>{renderHelpListItem(item)}</li>
                    ))}
                  </ul>
                )}
                {section.afterList?.map((paragraph, i) => (
                  <p
                    key={`after-list-paragraph-${i}`}
                    className="mt-4 text-base leading-relaxed text-slate-700"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.subsections?.map((subsection, subIndex) => (
                  <div key={`${subsection.title}-${subIndex}`} className="mt-6 rounded-md bg-slate-50 p-5">
                    <h3 className="text-xl font-semibold text-slate-900">{subsection.title}</h3>
                    {subsection.paragraphs?.map((paragraph, i) => (
                      <p key={`sub-paragraph-${i}`} className="mt-3 text-base leading-relaxed text-slate-700">
                        {paragraph}
                      </p>
                    ))}
                    {subsection.list && subsection.list.length > 0 && (
                      <ul className="mt-3 list-disc space-y-2 pl-6 text-base text-slate-700">
                        {subsection.list.map((item, i) => (
                          <li key={`sub-list-${i}`}>{renderHelpListItem(item)}</li>
                        ))}
                      </ul>
                    )}
                    {subsection.afterList?.map((paragraph, i) => (
                      <p
                        key={`sub-after-list-paragraph-${i}`}
                        className="mt-3 text-base leading-relaxed text-slate-700"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </section>
            );
          })}

          <section className="rounded-md border border-emerald-100 bg-emerald-50/70 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">{ui.nextSteps}</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-700">
              {page.closing.map((paragraph, index) => (
                <p key={`closing-${index}`}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-slate-700">
              {relatedPages.map((relatedPage) => (
                <li key={relatedPage.slug}>
                  <Link
                    href={getLocalePath(locale, `help/${relatedPage.slug}`)}
                    className="text-emerald-700 underline-offset-4 hover:underline"
                  >
                    {relatedPage.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={converterPath} className="text-emerald-700 underline-offset-4 hover:underline">
                  {ui.backToConverter}
                </Link>
              </li>
            </ul>
          </section>
        </article>
        <JsonLd data={breadcrumbData} />
      </GlobalLayout>
    </TranslationProvider>
  );
}
