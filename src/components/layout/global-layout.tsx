import Image from "next/image";
import Link from "next/link";
import { ABOUT_SLUG, getAboutPage } from "@/lib/about/content";
import { HELP_INDEX_SLUG, getHelpIndex } from "@/lib/help-center/content";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalePath } from "@/lib/i18n/paths";
import { LanguageSwitcher } from "./language-switcher";

type GlobalLayoutProps = {
  children: React.ReactNode;
  locale: Locale;
  languageLabel: string;
  languageOptions: Record<Locale, string>;
  footerTagline: string;
  footerLegal: {
    privacy: string;
    terms: string;
  };
  footerContactLabel: string;
};

export function GlobalLayout({
  children,
  locale,
  languageLabel,
  languageOptions,
  footerTagline,
  footerLegal,
  footerContactLabel,
}: GlobalLayoutProps) {
  const helpIndex = getHelpIndex(locale);
  const aboutPage = getAboutPage(locale);
  const headerLinks = [
    helpIndex
      ? { href: getLocalePath(locale, HELP_INDEX_SLUG), label: helpIndex.title }
      : null,
    aboutPage
      ? { href: getLocalePath(locale, ABOUT_SLUG), label: aboutPage.navLabel }
      : null,
  ].filter((item): item is { href: string; label: string } => item !== null);

  return (
    <div 
      className="flex min-h-screen flex-col font-sans"
      style={{
        backgroundColor: '#ffffff',
        backgroundImage: `
          linear-gradient(rgba(209, 250, 229, 0.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(209, 250, 229, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}
    >
      <header className="bg-white/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-6">
          <Link
            href={getLocalePath(locale)}
            className="flex items-center gap-2 transition hover:opacity-80 md:gap-3"
          >
            <Image 
              src="/logo/apple-touch-icon.png" 
              alt="HEIC JPG NOW logo" 
              width={48} 
              height={48} 
              className="h-10 w-10 md:h-12 md:w-12"
            />
            <span className="text-base font-bold md:text-lg">
              <span className="bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                HEIC JPG
              </span>
              {' '}
              <span className="text-emerald-600">NOW</span>
            </span>
          </Link>
          <div className="flex flex-wrap items-center justify-end gap-4 md:gap-6">
            {headerLinks.length > 0 && (
              <nav aria-label="Primary" className="flex flex-wrap items-center gap-4 text-sm md:gap-5">
                {headerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-medium text-slate-600 transition hover:text-emerald-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            )}
            <LanguageSwitcher currentLocale={locale} label={languageLabel} options={languageOptions} />
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 space-y-8 px-6 pt-4 pb-12">{children}</main>
      <footer className="mt-auto border-t border-gray-200 bg-white/80 py-8">
        <div className="mx-auto max-w-7xl px-6">
          {/* 链接区域 */}
          <div className="flex items-center justify-center gap-6 text-sm">
            <Link
              href={getLocalePath(locale, "privacy")}
              className="text-gray-600 transition hover:text-emerald-600"
            >
              {footerLegal.privacy}
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href={getLocalePath(locale, "terms")}
              className="text-gray-600 transition hover:text-emerald-600"
            >
              {footerLegal.terms}
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href={getLocalePath(locale, "contact")}
              className="text-gray-600 transition hover:text-emerald-600"
            >
              {footerContactLabel}
            </Link>
          </div>
          
          {/* 号召性文字 */}
          <p className="mt-6 text-center text-sm text-gray-500">
            {footerTagline}
          </p>
        </div>
      </footer>
    </div>
  );
}
