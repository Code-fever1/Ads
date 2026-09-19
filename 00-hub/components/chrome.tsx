export function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function NetworkBar({ current = "hub" }: { current?: "hub" | "kiln" | "rolepaper" }) {
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
