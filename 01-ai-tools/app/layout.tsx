import type { Metadata } from "next";
import Script from "next/script";
import { Commissioner, Source_Serif_4 } from "next/font/google";
import { JsonLd, NetworkBar, SiteFooter, SiteHeader } from "@/components/chrome";
import { orgJsonLd, webSiteJsonLd } from "@/lib/jsonld";
import { GA4_MEASUREMENT_ID, GOOGLE_SITE_VERIFICATION, site } from "@/lib/site";
import "./globals.css";

const ui = Commissioner({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kiln.toolfolio.page"),
  title: {
    default: "Kiln — Find the Right AI Tool (Verified Prices, Honest Verdicts)",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: "https://kiln.toolfolio.page" }],
  creator: site.name,
  publisher: "Toolfolio",
  category: "technology",
  keywords: [
    "AI tools",
    "AI tools directory",
    "best AI coding tools",
    "ChatGPT alternatives",
    "AI tool pricing",
  ],
  ...(GOOGLE_SITE_VERIFICATION
    ? { verification: { google: GOOGLE_SITE_VERIFICATION } }
    : {}),
  openGraph: {
    title: "Kiln — Find the Right AI Tool (Verified Prices, Honest Verdicts)",
    description: site.description,
    url: "https://kiln.toolfolio.page",
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiln — Find the Right AI Tool (Verified Prices, Honest Verdicts)",
    description: site.description,
  },
  alternates: {
    types: { "application/rss+xml": "/feed.xml" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/mark.png", type: "image/png" },
    ],
    apple: "/mark.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${ui.variable} ${body.variable} h-full`}>
      <body className="min-h-full">
        {GA4_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_MEASUREMENT_ID}');`}
            </Script>
          </>
        ) : null}
        <JsonLd data={orgJsonLd()} />
        <JsonLd data={webSiteJsonLd()} />
        <div className="shell">
          <NetworkBar current="kiln" />
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
