import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { UploadQueueProvider } from "@/components/upload/context/upload-queue-provider";
import { GATracker } from "@/components/analytics/ga-tracker";
import { defaultLocale } from "@/lib/i18n/locales";
import { rootLayoutMetadata } from "@/lib/seo/root-layout-metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = rootLayoutMetadata;

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={defaultLocale}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9027033456343227"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GATracker />
        <UploadQueueProvider>{children}</UploadQueueProvider>
      </body>
    </html>
  );
}
