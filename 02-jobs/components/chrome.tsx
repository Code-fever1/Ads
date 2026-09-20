import Link from "next/link";

const nav = [
  ["Live 100", "/jobs"],
  ["Software", "/software-jobs"],
  ["Electrical", "/electrical-engineer-jobs"],
  ["Remote", "/remote-jobs"],
  ["Career", "/career"],
  ["Sources", "/sources"],
] as const;

export function SiteHeader() {
  return (
    <header className="masthead">
      <div>
        <Link href="/" className="paper-name">
          <img src="/mark.png" alt="Rolepaper logo" width={36} height={36} />
          Rolepaper
        </Link>
        <p className="deck">Live software jobs from public APIs. We are not the employer.</p>
      </div>
      <nav aria-label="Desks">
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
    <footer className="paper-foot">
      <p>
        Rolepaper is a third-party job aggregator on rolepaper.toolfolio.page. We are not the employer.
        Listings come from Remote OK, Himalayas, and Arbeitnow, then drop after 30 days. Apply on the
        original posting. Part of <a href="https://toolfolio.page">Toolfolio</a>.
      </p>
      <p className="footer-links">
        <a href="https://toolfolio.page/privacy">Privacy</a>
        <a href="https://toolfolio.page/disclosure">Ads disclosure</a>
        <Link href="/sources">Attribution</Link>
        <Link href="/career">Career desk</Link>
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

export function NetworkBar({ current = "rolepaper" }: { current?: "hub" | "kiln" | "rolepaper" }) {
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

