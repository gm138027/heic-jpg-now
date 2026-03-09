import Link from "next/link";
import type { ReactNode } from "react";
import { TranslationProvider } from "@/components/i18n/translation-provider";
import { GlobalLayout } from "@/components/layout/global-layout";
import { getDictionary, type PrivacyDictionary } from "@/lib/i18n/get-dictionary";
import { defaultLocale, type Locale } from "@/lib/i18n/locales";
import { getAbsoluteUrl } from "@/lib/url";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

type PrivacyScreenProps = {
  locale: Locale;
};

function renderTextWithAutoLinks(text: string, keyPrefix: string): ReactNode {
  // Match only RFC3986 URL characters so surrounding localized text (e.g. full-width brackets) is excluded.
  const urlPattern = /https?:\/\/[A-Za-z0-9\-._~:/?#[\]@!$&'()*+,;=%]+/g;
  const matches = Array.from(text.matchAll(urlPattern));

  if (matches.length === 0) {
    return text;
  }

  const nodes: ReactNode[] = [];
  let cursor = 0;

  matches.forEach((match, index) => {
    const rawUrl = match[0];
    const start = match.index ?? 0;
    const end = start + rawUrl.length;
    // Trim common trailing punctuation (ASCII + full-width CJK marks) from auto-linked URLs.
    const cleanUrl = rawUrl.replace(/[)\]}>）】》」』,，.;:!?！？。]+$/u, "");
    const trailing = rawUrl.slice(cleanUrl.length);

    if (start > cursor) {
      nodes.push(text.slice(cursor, start));
    }

    nodes.push(
      <a
        key={`${keyPrefix}-link-${index}`}
        href={cleanUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="underline decoration-emerald-300 underline-offset-2 break-all hover:text-emerald-700"
      >
        {cleanUrl}
      </a>,
    );

    if (trailing) {
      nodes.push(trailing);
    }

    cursor = end;
  });

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return <>{nodes}</>;
}

export async function PrivacyScreen({ locale }: PrivacyScreenProps) {
  const messages = await getDictionary(locale);
  const site = messages.common.site;
  const footer = messages.common.footer;
  const privacy = messages.privacy;
  const sections: PrivacyDictionary["sections"] =
    Array.isArray(privacy.sections) ? privacy.sections : [];
  const tocItems =
    Array.isArray(privacy.toc) && privacy.toc.length > 0
      ? privacy.toc
      : sections.map((section, index) => ({
          id: `privacy-section-${index + 1}`,
          label: section.title,
        }));
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
        name: privacy.hero.title,
        item: getAbsoluteUrl(`${localePrefix}/privacy`),
      },
    ],
  };

  const homeLabel = site.breadcrumb?.home ?? site.name ?? "Home";
  const breadcrumbItems = [
    { key: "home", label: homeLabel, href: "" },
    { key: "privacy", label: privacy.hero.title },
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
      >
        <article className="mx-auto max-w-4xl space-y-12 py-6">
          <Breadcrumbs locale={locale} items={breadcrumbItems} />
          <section className="rounded-3xl border border-emerald-100 bg-white/80 p-8 shadow-sm">
            <p className="text-sm font-medium text-emerald-600">{privacy.hero.updated}</p>
            <h1 className="mt-3 text-3xl font-bold text-slate-900">{privacy.hero.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-slate-700">{privacy.hero.description}</p>
          </section>

          {privacy.tocTitle && tocItems.length > 0 && (
            <nav className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                {privacy.tocTitle}
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
            const sectionId = tocItems[index]?.id ?? `privacy-section-${index + 1}`;
            return (
              <section
                key={`${section.title}-${index}`}
                id={sectionId}
                className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm"
              >
                <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
                {section.body?.map((paragraph: string, i: number) => (
                  <p key={`body-${i}`} className="mt-4 text-base leading-relaxed text-slate-700">
                    {renderTextWithAutoLinks(paragraph, `body-${i}`)}
                  </p>
                ))}
                {Array.isArray(section.list) && section.list.length > 0 && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-slate-700">
                    {section.list.map((item: string, i: number) => (
                      <li key={`list-${i}`}>{renderTextWithAutoLinks(item, `list-${i}`)}</li>
                    ))}
                  </ul>
                )}
                {Array.isArray(section.notes) && section.notes.length > 0 && (
                  <div className="mt-4 rounded-lg bg-slate-50 p-4 text-sm text-slate-600">
                    {section.notes.map((note: string, i: number) => (
                      <p key={`note-${i}`} className={i > 0 ? "mt-2" : undefined}>
                        {renderTextWithAutoLinks(note, `note-${i}`)}
                      </p>
                    ))}
                  </div>
                )}
              </section>
            );
          })}

          <section className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">{privacy.contact.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-700">{privacy.contact.description}</p>
            <div className="mt-4 rounded-xl bg-white px-4 py-3 text-sm text-slate-700 shadow-inner">
              <p className="font-medium text-slate-900">{privacy.contact.emailLabel}</p>
              <a
                href={`mailto:${privacy.contact.email}`}
                className="mt-1 inline-flex items-center gap-2 font-semibold text-emerald-600 underline-offset-4 hover:underline"
              >
                {privacy.contact.email}
              </a>
              <p className="mt-2 text-xs text-slate-500">{privacy.contact.response}</p>
            </div>
          </section>
        </article>
        <JsonLd data={breadcrumbData} />
      </GlobalLayout>
    </TranslationProvider>
  );
}
