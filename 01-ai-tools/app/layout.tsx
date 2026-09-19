import type { Metadata } from "next";
import { Commissioner, Source_Serif_4 } from "next/font/google";
import { JsonLd, SiteFooter, SiteHeader } from "@/components/chrome";
import { orgJsonLd, webSiteJsonLd } from "@/lib/jsonld";
import { site } from "@/lib/site";
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
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.name}`,
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
    "AI image generators",
  ],
  openGraph: {
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    url: "https://kiln.toolfolio.page",
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
  },
  alternates: {
    canonical: "/",
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
    icon: [{ url: "/mark.png", type: "image/png" }],
    apple: "/mark.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${ui.variable} ${body.variable} h-full`}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5974580626732926"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full">
        <JsonLd data={orgJsonLd()} />
        <JsonLd data={webSiteJsonLd()} />
        <div className="shell">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
