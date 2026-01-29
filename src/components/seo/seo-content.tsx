import { defaultLocale, type Locale } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { UploadTool } from "@/components/upload/upload-tool";
import { HowToSteps } from "./how-to-steps";
import { FeatureGrid } from "./feature-grid";
import { CheckList } from "./check-list";
import { FAQAccordion } from "./faq-accordion";
import { JsonLd } from "./json-ld";
import { getAbsoluteUrl } from "@/lib/url";

type SEOContentProps = {
  locale: Locale;
};

export async function SEOContent({ locale }: SEOContentProps) {
  const messages = await getDictionary(locale);
  const seo = messages.common.seo;
  const homeBreadcrumbLabel =
    messages.common.site.breadcrumb?.home ?? messages.common.site.name ?? "Home";
  const homeBreadcrumbUrl = getAbsoluteUrl(locale === defaultLocale ? "" : `/${locale}`);

  return (
    <>
      {/* H1 Section */}
      {seo?.h1 && (
        <section className="mb-12 space-y-4 text-center">
          <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            {seo.h1.title}
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            {(() => {
              const text = seo.h1.subtitle;
              const separators = ["。", "—", "–", ","];
              let firstBreakIndex = -1;
              let foundSeparator = '';
              
              for (const sep of separators) {
                const index = text.indexOf(sep);
                if (index !== -1 && (firstBreakIndex === -1 || index < firstBreakIndex)) {
                  firstBreakIndex = index;
                  foundSeparator = sep;
                }
              }
              
              if (firstBreakIndex === -1) {
                return text;
              }
              
              const firstPart = text.substring(0, firstBreakIndex + foundSeparator.length);
              const restPart = text.substring(firstBreakIndex + foundSeparator.length);
              
              return (
                <>
                  <span className="font-medium text-emerald-600">{firstPart}</span>
                  {restPart}
                </>
              );
            })()}
          </p>
        </section>
      )}

      {/* Upload Tool Section */}
      <section id="converter" className="mb-16">
        <UploadTool />
      </section>

      {/* SEO Content Sections */}
      {seo && (
      <div className="mx-auto max-w-5xl space-y-16 px-4 pt-4 pb-12">
      {/* Intro Section */}
      {seo.sections?.intro && (
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">
            {seo.sections.intro.title}
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-slate-700">
            {seo.sections.intro.content.split('\n\n').map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
      )}

      {/* How To Section */}
      {seo.sections?.howTo && (
        <HowToSteps
          title={seo.sections.howTo.title}
          steps={seo.sections.howTo.steps}
        />
      )}

      {/* Features Section */}
      {seo.sections?.features && (
        <FeatureGrid
          title={seo.sections.features.title}
          features={[
            seo.sections.features.list?.free,
            seo.sections.features.list?.batch,
            seo.sections.features.list?.browser,
            seo.sections.features.list?.devices,
            seo.sections.features.list?.privacy,
            seo.sections.features.list?.quality,
          ].filter((f): f is { title: string; content: string } => f !== undefined)}
        />
      )}

      {/* Use Cases Section */}
      {seo.sections?.useCases && (
        <CheckList
          title={seo.sections.useCases.title}
          items={[
            seo.sections.useCases.list?.devices,
            seo.sections.useCases.list?.social,
            seo.sections.useCases.list?.compatibility,
            seo.sections.useCases.list?.web,
            seo.sections.useCases.list?.windows,
            seo.sections.useCases.list?.iphoneBatch,
          ].filter((f): f is { title: string; content: string } => f !== undefined)}
        />
      )}

      {/* About HEIC Section */}
      {seo.sections?.about && (
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">
            {seo.sections.about.title}
          </h2>
          
          <div className="space-y-6">
            {/* HEIC Format */}
            {seo.sections.about.heicFormat && (
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {seo.sections.about.heicFormat.title}
                </h3>
                <div className="mb-3 border-t border-slate-200"></div>
                <p className="text-base leading-relaxed text-slate-700">
                  {seo.sections.about.heicFormat.content}
                </p>
              </div>
            )}

            {/* Pros and Cons */}
            {seo.sections.about.prosAndCons && (
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold text-slate-900">
                  {seo.sections.about.prosAndCons.title}
                </h3>
                <div className="mb-4 border-t border-slate-200"></div>
                
                <div className="space-y-4">
                  {/* Pros */}
                  {seo.sections.about.prosAndCons.pros && (
                    <div>
                      <h4 className="mb-2 text-lg font-medium text-emerald-700">
                        {seo.sections.about.prosAndCons.pros.title}
                      </h4>
                      <ul className="list-disc space-y-1 pl-6 text-base text-slate-700">
                        {seo.sections.about.prosAndCons.pros.items.map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Cons */}
                  {seo.sections.about.prosAndCons.cons && (
                    <div>
                      <h4 className="mb-2 text-lg font-medium text-slate-700">
                        {seo.sections.about.prosAndCons.cons.title}
                      </h4>
                      <ul className="list-disc space-y-1 pl-6 text-base text-slate-700">
                        {seo.sections.about.prosAndCons.cons.items.map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* JPG Benefits */}
            {seo.sections.about.jpgBenefits && (
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {seo.sections.about.jpgBenefits.title}
                </h3>
                <div className="mb-3 border-t border-slate-200"></div>
                <ul className="list-disc space-y-1 pl-6 text-base text-slate-700">
                  {seo.sections.about.jpgBenefits.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {seo.sections?.about && seo.faq && (
        <FAQAccordion
          title={seo.faq.title}
          items={seo.faq.items}
        />
      )}
      </div>
      )}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "HEIC JPG Now",
          url: getAbsoluteUrl(),
          logo: getAbsoluteUrl("/logo/android-chrome-512x512.png"),
          contactPoint: [
            {
              "@type": "ContactPoint",
              email: "guom0900@gmail.com",
              contactType: "customer support",
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: homeBreadcrumbLabel,
              item: homeBreadcrumbUrl,
            },
          ],
        }}
      />
    </>
  );
}
