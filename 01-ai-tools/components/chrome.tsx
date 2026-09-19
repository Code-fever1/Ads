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
          <img src="/mark.png" alt={`${site.name} logo`} width={32} height={32} />
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
        {site.name} is an independent AI tools directory on kiln.toolfolio.page. We do not sell the
        software. Outbound links go to the vendor. Part of{" "}
        <a href="https://toolfolio.page">Toolfolio</a>.
      </p>
      <p className="footer-links">
        <a href="https://toolfolio.page/privacy">Privacy</a>
        <Link href="/disclosure">Ads and affiliates</Link>
        <Link href="/methodology">Method</Link>
        <Link href="/submit">Submit a tool</Link>
      </p>
    </footer>
  );
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function NetworkBar({ current = "kiln" }: { current?: "hub" | "kiln" | "rolepaper" }) {
  return (
    <div className="network-ribbon">
      <div className="network-ribbon-content">
        <span className="network-brand">
          <span className="network-icon">❖</span> Toolfolio Network
        </span>
        <nav className="network-nav" aria-label="Network Sites">
          <a
            href="https://kiln.toolfolio.page"
            className={`network-nav-item ${current === "kiln" ? "current-site" : ""}`}
            title="Verified AI Tools Directory"
          >
            Kiln <span className="net-sub">· AI Tools</span>
          </a>
          <span className="net-divider">/</span>
          <a
            href="https://rolepaper.toolfolio.page"
            className={`network-nav-item ${current === "rolepaper" ? "current-site" : ""}`}
            title="Live Tech & Electrical Jobs"
          >
            Rolepaper <span className="net-sub">· Tech Jobs</span>
          </a>
          <span className="net-divider">/</span>
          <a
            href="https://toolfolio.page"
            className={`network-nav-item ${current === "hub" ? "current-site" : ""}`}
            title="Toolfolio Apex Hub"
          >
            Apex Hub
          </a>
        </nav>
      </div>
    </div>
  );
}

