"use client";

import Image from "next/image";
import { useTransition, type ChangeEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, defaultLocale, type Locale } from "@/lib/i18n/locales";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
  options: Record<Locale, string>;
};

const translatableLocales = locales.filter((locale) => locale !== defaultLocale);
const LOCALE_COOKIE = "site_locale";

function setLocaleCookie(locale: Locale) {
  if (typeof document === "undefined") return;
  const maxAge = 60 * 60 * 24 * 365;
  const secure = window.location.protocol === "https:" ? " Secure;" : "";
  document.cookie = `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=${maxAge}; SameSite=Lax;${secure}`;
}

export function LanguageSwitcher({ currentLocale, label, options }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname() ?? "/";
  const [isPending, startTransition] = useTransition();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as Locale;
    if (nextLocale === currentLocale) return;
    const segments = pathname.split("/").filter(Boolean);
    const hasLocalePrefix =
      segments.length > 0 && translatableLocales.includes(segments[0] as Locale);
    const restSegments = hasLocalePrefix ? segments.slice(1) : segments;
    const href =
      nextLocale === defaultLocale
        ? restSegments.length
          ? `/${restSegments.join("/")}`
          : "/"
        : `/${[nextLocale, ...restSegments].join("/")}`;
    setLocaleCookie(nextLocale);
    startTransition(() => {
      router.replace(href, { scroll: false });
    });
  };

  return (
    <label className="inline-flex items-center gap-2 cursor-pointer">
      <Image
        src="/globe.svg"
        alt={label}
        width={18}
        height={18}
        className="h-[18px] w-[18px]"
      />
      <select
        className="cursor-pointer rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
        value={currentLocale}
        onChange={handleChange}
        disabled={isPending}
        aria-label={label}
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {options[locale] ?? locale.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  );
}
