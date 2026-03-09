import { SITE_BASE_URL } from "@/lib/site-config";

function normalizePath(path?: string) {
  if (!path) return "";
  const trimmed = path.replace(/^\//, "");
  return trimmed ? `/${trimmed}` : "";
}

export function getAbsoluteUrl(path = "") {
  return `${SITE_BASE_URL}${normalizePath(path)}`;
}
