import Link from "next/link";
import { categories } from "@/data/categories";
import { site } from "@/lib/site";
import { MobileNav } from "@/components/MobileNav";

const nav = [
  ["Tools", "/tools"],
  ["Categories", "/categories"],
  ["Compare", "/compare"],
  ["Best of", "/best"],
  ["Guides", "/blog"],
  ["About", "/about"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="brand-lockup">
        <Link href="/" className="wordmark">
          <svg
            width="30"
            height="30"
            viewBox="0 0 64 64"
            aria-hidden="true"
            className="wordmark-svg"
          >
            <rect width="64" height="64" rx="10" fill="#2b2118" />
            <rect
              x="6"
              y="6"
              width="52"
              height="52"
              rx="7"
              fill="none"
              stroke="#d99b26"
              strokeWidth="3"
            />
            <path d="M21 17h7v13l12-13h9L35 31l15 16h-9L28 33v14h-7V17z" fill="#f6edd8" />
          </svg>
          <span>{site.name}</span>
          <span className="wordmark-sub">by Toolfolio</span>
        </Link>
        <p className="tag">{site.tagline}</p>
      </div>
      <nav className="desktop-nav" aria-label="Primary">
        {nav.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
      <MobileNav links={nav} />
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getUTCFullYear();
  return (
    <footer className="site-footer">
      <p className="footer-note">
        <strong>Prices are checked by hand — verify before you buy.</strong> {site.name} is an
        independent AI tools directory on kiln.toolfolio.page. We do not sell the software. Part of{" "}
        <a href="https://toolfolio.page">Toolfolio</a>.
      </p>
      <div className="footer-grid">
        <div>
          <p className="footer-heading">Directory</p>
          <p className="footer-links">
            <Link href="/tools">All tools</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/compare">Compare</Link>
            <Link href="/best">Best of</Link>
            <Link href="/blog">Guides</Link>
            <Link href="/newsletter">Newsletter &amp; RSS</Link>
          </p>
        </div>
        <div>
          <p className="footer-heading">Categories</p>
          <p className="footer-links">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/categories/${cat.slug}`}>
                {cat.title}
              </Link>
            ))}
          </p>
        </div>
        <div>
          <p className="footer-heading">Policies &amp; Info</p>
          <p className="footer-links">
            <Link href="/about">About</Link>
            <Link href="/methodology">Method</Link>
            <Link href="/disclosure">Affiliate disclosure</Link>
            <Link href="/submit">Submit a tool</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </p>
        </div>
      </div>
      <p className="footer-copy">
        © {year} {site.name} · Part of <a href="https://toolfolio.page">Toolfolio</a> ·{" "}
        <a href="/feed.xml">RSS Feed</a>
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
          <svg
            className="network-icon"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6 0l2.2 3.8L12 6 8.2 8.2 6 12 3.8 8.2 0 6l3.8-2.2L6 0z" />
          </svg>{" "}
          Toolfolio Network
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
