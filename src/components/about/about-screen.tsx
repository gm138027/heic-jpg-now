import type { ReactNode } from "react";
import { TranslationProvider } from "@/components/i18n/translation-provider";
import { GlobalLayout } from "@/components/layout/global-layout";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { getAboutPage } from "@/lib/about/content";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { defaultLocale, type Locale } from "@/lib/i18n/locales";
import { getAbsoluteUrl } from "@/lib/url";

type AboutScreenProps = {
  locale: Locale;
};

function renderInlineCode(text: string, keyPrefix: string): ReactNode {
  const parts = text.split(/(`[^`]+`)/g).filter(Boolean);

  if (parts.length === 1) {
    return text;
  }

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code
              key={`${keyPrefix}-code-${index}`}
              className="rounded bg-slate-100 px-1 py-0.5 font-mono text-[0.95em] text-slate-800"
            >
              {part.slice(1, -1)}
            </code>
          );
        }

        return <span key={`${keyPrefix}-text-${index}`}>{part}</span>;
      })}
    </>
  );
}

export async function AboutScreen({ locale }: AboutScreenProps) {
  const messages = await getDictionary(locale);
  const about = getAboutPage(locale);
  const site = messages.common.site;
  const footer = messages.common.footer;
  const localePrefix = locale === defaultLocale ? "" : `/${locale}`;
  const homeBreadcrumbLabel = site.breadcrumb?.home ?? site.name ?? "Home";
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
        name: about.title,
        item: getAbsoluteUrl(`${localePrefix}/about`),
      },
    ],
  };
  const breadcrumbItems = [
    { key: "home", label: homeBreadcrumbLabel, href: "" },
    { key: "about", label: about.title },
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

          <section className="rounded-3xl border border-emerald-100 bg-white/80 p-8 shadow-sm">
            <h1 className="text-3xl font-bold text-slate-900">{about.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              {renderInlineCode(about.heroDescription, "hero")}
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
            {about.intro.map((paragraph, index) => (
              <p
                key={`intro-${index}`}
                className={index === 0 ? "text-base leading-relaxed text-slate-700" : "mt-4 text-base leading-relaxed text-slate-700"}
              >
                {renderInlineCode(paragraph, `intro-${index}`)}
              </p>
            ))}
          </section>

          {about.sections.map((section, index) => (
            <section
              key={`${section.title}-${index}`}
              className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
              {section.paragraphs?.map((paragraph, paragraphIndex) => (
                <p
                  key={`paragraph-${paragraphIndex}`}
                  className="mt-4 text-base leading-relaxed text-slate-700"
                >
                  {renderInlineCode(paragraph, `section-${index}-paragraph-${paragraphIndex}`)}
                </p>
              ))}
              {section.list && section.list.length > 0 && (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-slate-700">
                  {section.list.map((item, itemIndex) => (
                    <li key={`item-${itemIndex}`}>
                      {renderInlineCode(item, `section-${index}-item-${itemIndex}`)}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
        <JsonLd data={breadcrumbData} />
      </GlobalLayout>
    </TranslationProvider>
  );
}
