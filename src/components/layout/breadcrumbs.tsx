import Link from "next/link";
import { getLocalePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/locales";

export type BreadcrumbItem = {
  key: string;
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  locale: Locale;
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ locale, items }: BreadcrumbsProps) {
  if (!items.length) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const href =
            item.href !== undefined ? getLocalePath(locale, item.href) : undefined;

          return (
            <li key={item.key} className="flex items-center gap-2">
              {href && !isLast ? (
                <Link
                  href={href}
                  className="text-slate-600 transition hover:text-emerald-600"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-400">{item.label}</span>
              )}
              {!isLast && <span className="text-slate-300" aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
