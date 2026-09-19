import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Libre_Baskerville } from "next/font/google";
import { JsonLd, SiteFooter, SiteHeader } from "@/components/chrome";
import { orgJsonLd, webSiteJsonLd } from "@/lib/jsonld";
import "./globals.css";

const ui = Atkinson_Hyperlegible({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const essay = Libre_Baskerville({
  variable: "--font-essay",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const description =
  "Live software, machine learning, and electrical engineering jobs from public APIs. Rolepaper is not the employer — apply on the original posting.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rolepaper.toolfolio.page"),
  title: {
    default: "Rolepaper · live software and electrical jobs",
    template: "%s · Rolepaper",
  },
  description,
  applicationName: "Rolepaper",
  authors: [{ name: "Rolepaper", url: "https://rolepaper.toolfolio.page" }],
  creator: "Rolepaper",
  publisher: "Toolfolio",
  category: "jobs",
  keywords: [
    "software engineer jobs",
    "remote developer jobs",
    "machine learning jobs",
    "frontend developer jobs",
    "electrical engineer jobs",
  ],
  openGraph: {
    title: "Rolepaper · live software and electrical jobs",
    description,
    url: "https://rolepaper.toolfolio.page",
    siteName: "Rolepaper",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rolepaper · live software and electrical jobs",
    description,
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
    <html lang="en" className={`${ui.variable} ${essay.variable} h-full`}>
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
        <div className="wrap">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
