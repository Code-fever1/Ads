import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Libre_Baskerville } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/chrome";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://rolepaper.toolfolio.page"),
  title: {
    default: "Rolepaper · third-party software & electrical jobs",
    template: "%s · Rolepaper",
  },
  description:
    "Live tech and electrical engineering listings from public job APIs. We are not the employer. Apply on the original posting.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${ui.variable} ${essay.variable} h-full`}>
      <body className="min-h-full">
        <div className="wrap">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
