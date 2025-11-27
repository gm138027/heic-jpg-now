const BASE_URL = "https://heicjpgnow.com";

function normalizePath(path?: string) {
  if (!path) return "";
  const trimmed = path.replace(/^\//, "");
  return trimmed ? `/${trimmed}` : "";
}

export function getAbsoluteUrl(path = "") {
  return `${BASE_URL}${normalizePath(path)}`;
}
