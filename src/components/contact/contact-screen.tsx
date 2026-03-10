import Link from "next/link";
import { TranslationProvider } from "@/components/i18n/translation-provider";
import { GlobalLayout } from "@/components/layout/global-layout";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { getContactDictionary, type ContactDictionary } from "@/lib/i18n/get-contact-dictionary";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { defaultLocale, type Locale } from "@/lib/i18n/locales";
import { getLocalePath } from "@/lib/i18n/paths";
import { getAbsoluteUrl } from "@/lib/url";

type ContactScreenProps = {
  locale: Locale;
};

export async function ContactScreen({ locale }: ContactScreenProps) {
  const [messages, contact] = await Promise.all([getDictionary(locale), getContactDictionary(locale)]);
  const site = messages.common.site;
  const footer = messages.common.footer;
  const sections: ContactDictionary["sections"] =
    Array.isArray(contact.sections) ? contact.sections : [];
  const tocItems =
    Array.isArray(contact.toc) && contact.toc.length > 0
      ? contact.toc
      : sections.map((section, index) => ({
          id: `contact-section-${index + 1}`,
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
        name: contact.hero.title,
        item: getAbsoluteUrl(`${localePrefix}/contact`),
      },
    ],
  };

  const homeLabel = site.breadcrumb?.home ?? site.name ?? "Home";
  const breadcrumbItems = [
    { key: "home", label: homeLabel, href: "" },
    { key: "contact", label: contact.hero.title },
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
            <p className="text-sm font-medium text-emerald-600">{contact.hero.updated}</p>
            <h1 className="mt-3 text-3xl font-bold text-slate-900">{contact.hero.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-slate-700">{contact.hero.description}</p>
          </section>

          {contact.tocTitle && tocItems.length > 0 && (
            <nav className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                {contact.tocTitle}
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
            const sectionId = tocItems[index]?.id ?? `contact-section-${index + 1}`;
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
              </section>
            );
          })}

          <section className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">{contact.contact.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              {contact.contact.description}
            </p>
            <div className="mt-4 rounded-xl bg-white px-4 py-3 text-sm text-slate-700 shadow-inner">
              <p className="font-medium text-slate-900">{contact.contact.emailLabel}</p>
              <a
                href={`mailto:${contact.contact.email}`}
                className="mt-1 inline-flex items-center gap-2 font-semibold text-emerald-600 underline-offset-4 hover:underline"
              >
                {contact.contact.email}
              </a>
              <p className="mt-2 text-xs text-slate-500">{contact.contact.response}</p>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">{contact.related.title}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-slate-700">
              <li>
                <Link className="text-emerald-700 underline-offset-4 hover:underline" href={getLocalePath(locale, "privacy")}>
                  {contact.related.privacy}
                </Link>
              </li>
              <li>
                <Link className="text-emerald-700 underline-offset-4 hover:underline" href={getLocalePath(locale, "terms")}>
                  {contact.related.terms}
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
