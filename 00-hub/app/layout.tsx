import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const ui = Figtree({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toolfolio.page"),
  title: {
    default: "Toolfolio",
    template: "%s · Toolfolio",
  },
  description:
    "A small house of focused sites: Kiln for AI tools, Rolepaper for tech jobs. Unrelated niches stay apart.",
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/mark.png", type: "image/png" }],
    apple: "/mark.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${ui.variable} h-full`}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5974580626732926"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full">
        <div className="frame">
          <header className="mast">
            <Link className="wordmark" href="/">
              <img src="/mark.png" alt="" width={28} height={28} />
              Toolfolio
            </Link>
            <nav>
              <Link href="/privacy">Privacy</Link>
              <Link href="/disclosure">Ads</Link>
            </nav>
          </header>
          {children}
          <footer className="foot">
            Separate sites. One publisher. We do not mix jobs, tools, and deals on a single URL.
          </footer>
        </div>
      </body>
    </html>
  );
}
