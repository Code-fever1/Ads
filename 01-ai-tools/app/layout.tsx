import type { Metadata } from "next";
import { Commissioner, Source_Serif_4 } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/chrome";
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
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
  },
  robots: { index: true, follow: true },
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
        <div className="shell">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
