import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  ["Tools", "/tools"],
  ["Categories", "/categories"],
  ["Best of", "/best"],
  ["Compare", "/compare"],
  ["Notes", "/blog"],
  ["Submit", "/submit"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="brand-lockup">
        <Link href="/" className="wordmark">
          {site.name}
        </Link>
        <p className="tag">{site.tagline}</p>
      </div>
      <nav aria-label="Primary">
        {nav.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>
        {site.name} is a directory. We do not sell the software. Outbound links go to the vendor.
      </p>
      <p className="footer-links">
        <Link href="/methodology">Method</Link>
        <Link href="/disclosure">Ads and affiliates</Link>
        <Link href="/submit">Submit a tool</Link>
      </p>
    </footer>
  );
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
