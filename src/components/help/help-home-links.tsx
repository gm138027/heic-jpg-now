import Link from "next/link";
import { getHelpIndex, getHelpPages } from "@/lib/help-center/content";
import { getHelpUiCopy } from "@/lib/help-center/ui-copy";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalePath } from "@/lib/i18n/paths";

type HelpHomeLinksProps = {
  locale: Locale;
};

export function HelpHomeLinks({ locale }: HelpHomeLinksProps) {
  const helpIndex = getHelpIndex(locale);
  const helpPages = getHelpPages(locale);
  const ui = getHelpUiCopy(locale);

  if (!helpIndex || !helpPages.length) {
    return null;
  }

  return (
    <section className="rounded-md border border-emerald-100 bg-emerald-50/60 p-8 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-emerald-600">{ui.badge}</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">{helpIndex.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">{helpIndex.intro[0]}</p>
        </div>
        <Link
          href={getLocalePath(locale, "help")}
          className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          {ui.viewIndex}
        </Link>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {helpPages.map((page) => (
          <Link
            key={page.slug}
            href={getLocalePath(locale, `help/${page.slug}`)}
            className="rounded-md border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:border-emerald-500 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-slate-900">{page.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{page.summary}</p>
            <p className="mt-4 text-sm font-medium text-emerald-600">{ui.readMore}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
