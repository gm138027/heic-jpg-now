import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale, type Locale } from "./src/lib/i18n/locales";

const LOCALE_COOKIE = "site_locale";
const supportedLocales = locales.filter((locale) => locale !== defaultLocale);
const VARY_KEYS = ["Accept-Language", "Cookie"];

function isBot(userAgent: string | null) {
  if (!userAgent) return false;
  return /bot|crawler|spider|crawling|slurp|bingpreview|bingbot|googlebot|yandex|baiduspider|duckduckbot|sogou/i.test(
    userAgent,
  );
}

function isPrefetch(request: NextRequest) {
  const purpose = request.headers.get("purpose");
  const prefetch = request.headers.get("x-middleware-prefetch");
  const nextRouterPrefetch = request.headers.get("next-router-prefetch");
  return purpose === "prefetch" || prefetch === "1" || nextRouterPrefetch === "1";
}

function normalizeLocale(value?: string): Locale | null {
  if (!value) return null;
  const lower = value.toLowerCase();
  return locales.includes(lower as Locale) ? (lower as Locale) : null;
}

function parseAcceptLanguage(header: string | null) {
  if (!header) return [];
  return header
    .split(",")
    .map((part) => {
      const [lang, qValue] = part.trim().split(";q=");
      const q = qValue ? Number(qValue) : 1;
      return { lang: lang.toLowerCase(), q: Number.isNaN(q) ? 0 : q };
    })
    .filter((item) => item.lang)
    .sort((a, b) => b.q - a.q)
    .map((item) => item.lang);
}

function matchSupportedLocale(languages: string[]): Locale | null {
  for (const lang of languages) {
    const exact = supportedLocales.find((locale) => locale === lang);
    if (exact) return exact;
    const base = lang.split("-")[0];
    if (supportedLocales.includes(base as Locale)) {
      return base as Locale;
    }
  }
  return null;
}

function getPathLocale(pathname: string): Locale | null {
  const segment = pathname.split("/").filter(Boolean)[0];
  if (!segment) return null;
  const lower = segment.toLowerCase();
  if (supportedLocales.includes(lower as Locale)) {
    return lower as Locale;
  }
  return null;
}

function localeCookieOptions() {
  return {
    path: "/",
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
  };
}

function applyVary(response: NextResponse) {
  const existing = response.headers.get("Vary");
  const values = new Set(
    (existing ? existing.split(",") : []).map((value) => value.trim()).filter(Boolean),
  );
  VARY_KEYS.forEach((value) => values.add(value));
  response.headers.set("Vary", Array.from(values).join(", "));
  return response;
}

export function middleware(request: NextRequest) {
  if (isPrefetch(request)) {
    return NextResponse.next();
  }
  if (isBot(request.headers.get("user-agent"))) {
    return NextResponse.next();
  }

  const pathname = request.nextUrl.pathname;
  const pathLocale = getPathLocale(pathname);
  const cookieLocale = normalizeLocale(request.cookies.get(LOCALE_COOKIE)?.value);

  if (pathLocale && pathLocale !== cookieLocale) {
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, pathLocale, localeCookieOptions());
    return applyVary(response);
  }

  if (pathname !== "/") {
    return NextResponse.next();
  }

  const accepted = parseAcceptLanguage(request.headers.get("accept-language"));
  const detected = cookieLocale ?? matchSupportedLocale(accepted);
  if (!detected || detected === defaultLocale) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${detected}`;
  const response = NextResponse.redirect(url);
  if (!cookieLocale) {
    response.cookies.set(LOCALE_COOKIE, detected, localeCookieOptions());
  }
  return applyVary(response);
}

export const config = {
  matcher: ["/", "/:locale([a-z]{2}|[a-z]{2}-[a-z]{2})/:path*"],
};
