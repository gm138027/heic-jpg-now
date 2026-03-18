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
  const featureList = seo.sections?.features?.list as
    | Record<string, { title: string; content: string } | undefined>
    | undefined;
  const useCaseList = seo.sections?.useCases?.list as
    | Record<string, { title: string; content: string } | null | undefined>
    | undefined;
  const hasWhyChoose = Boolean(seo.sections?.whyChoose);

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
              const separators = [".", "。", "!", "！", "?", "？", "—", "–", ","];
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
        hasWhyChoose ? (
          <CheckList
            title={seo.sections.features.title}
            items={[
              featureList?.batch,
              featureList?.free,
              featureList?.browser,
              featureList?.devices,
              featureList?.privacy,
            ].filter((f): f is { title: string; content: string } => f !== undefined)}
          />
        ) : (
          <FeatureGrid
            title={seo.sections.features.title}
            features={
              [
                featureList?.free,
                featureList?.batch,
                featureList?.browser,
                featureList?.devices,
                featureList?.privacy,
                featureList?.quality,
              ].filter((f): f is { title: string; content: string } => f !== undefined)
            }
          />
        )
      )}

      {/* Why Choose Section */}
      {seo.sections?.whyChoose && (
        <FeatureGrid
          title={seo.sections.whyChoose.title}
          features={[
            seo.sections.whyChoose.list?.stable,
            seo.sections.whyChoose.list?.continueAfterFailure,
            seo.sections.whyChoose.list?.zipNames,
            seo.sections.whyChoose.list?.lessManualWork,
          ].filter((f): f is { title: string; content: string } => f !== undefined)}
        />
      )}

      {/* Use Cases Section */}
      {seo.sections?.useCases && (
        <CheckList
          title={seo.sections.useCases.title}
          items={[
            useCaseList?.devices,
            useCaseList?.social,
            useCaseList?.compatibility,
            useCaseList?.web,
            useCaseList?.windows,
            useCaseList?.iphoneBatch,
          ].filter((f): f is { title: string; content: string } => f !== null && f !== undefined)}
        />
      )}

      {/* Bulk Tips Section */}
      {seo.sections?.bulkTips && (
        <CheckList
          title={seo.sections.bulkTips.title}
          intro={seo.sections.bulkTips.intro}
          variant="stacked"
          items={[
            seo.sections.bulkTips.list?.desktop,
            seo.sections.bulkTips.list?.time,
            seo.sections.bulkTips.list?.split,
            seo.sections.bulkTips.list?.exif,
          ].filter((f): f is { title: string; content: string } => f !== undefined)}
        />
      )}

      {/* FAQ Section */}
      {seo.faq && (
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
