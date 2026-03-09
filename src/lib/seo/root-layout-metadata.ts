import type { Metadata } from "next";
import { SITE_BASE_URL } from "@/lib/site-config";
import { getAbsoluteUrl } from "@/lib/url";

const OG_IMAGE = getAbsoluteUrl("/logo/android-chrome-512x512.png");

export const rootLayoutMetadata: Metadata = {
  metadataBase: new URL(SITE_BASE_URL),
  icons: {
    icon: [
      { url: getAbsoluteUrl("/logo/favicon-16x16.png"), sizes: "16x16", type: "image/png" },
      { url: getAbsoluteUrl("/logo/favicon-32x32.png"), sizes: "32x32", type: "image/png" },
      { url: getAbsoluteUrl("/logo/favicon.ico"), sizes: "any" },
    ],
    apple: [{ url: getAbsoluteUrl("/logo/apple-touch-icon.png"), sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "android-chrome", url: getAbsoluteUrl("/logo/android-chrome-192x192.png"), sizes: "192x192" },
      { rel: "android-chrome", url: OG_IMAGE, sizes: "512x512" },
    ],
  },
  manifest: getAbsoluteUrl("/logo/site.webmanifest"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};
