import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Toolfolio · Focused Multi-Niche Publications",
  description:
    "A small house of focused, independent publications. Kiln for a dated AI tools directory; Rolepaper for live software jobs.",
  path: "/",
});

const intentPills = [
  { label: "AI Coding Tools", href: "https://kiln.toolfolio.page/categories/coding", niche: "Kiln" },
  { label: "Remote Dev Jobs", href: "https://rolepaper.toolfolio.page/remote-jobs", niche: "Rolepaper" },
  { label: "AI Comparisons", href: "https://kiln.toolfolio.page/compare", niche: "Kiln" },
  { label: "Live Classifieds", href: "https://rolepaper.toolfolio.page/jobs", niche: "Rolepaper" },
  { label: "Frontend Jobs", href: "https://rolepaper.toolfolio.page/frontend-developer-jobs", niche: "Rolepaper" },
  { label: "Best AI 2026", href: "https://kiln.toolfolio.page/best", niche: "Kiln" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="kicker">Apex Publication Hub · toolfolio.page</p>
        <h1>Each niche gets its own front door.</h1>
        <p className="lede">
          Toolfolio is an independent network of high-signal directories. We do not blend job
          boards with software directories or ad-cluttered portals. Each discipline lives on its
          own dedicated domain with transparent verification.
        </p>

        <div className="intent-section">
          <p className="intent-label">Direct Intent Navigator</p>
          <div className="intent-pills">
            {intentPills.map((pill) => (
              <a
                key={pill.label}
                href={pill.href}
                className="intent-pill"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="pill-niche">{pill.niche}</span>
                <span className="pill-text">{pill.label}</span>
                <span className="pill-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="metrics-strip">
        <div className="metric">
          <span className="metric-val">37</span>
          <span className="metric-lbl">Dated AI tool profiles on Kiln, each with a skip-if line</span>
        </div>
        <div className="metric">
          <span className="metric-val">Up to 100</span>
          <span className="metric-lbl">Live software jobs on Rolepaper from public APIs</span>
        </div>
        <div className="metric">
          <span className="metric-val">Separate</span>
          <span className="metric-lbl">Niches stay on their own subdomains — no mixed spam</span>
        </div>
      </section>

      <div className="sites">
        <a
          className="site-card"
          href="https://kiln.toolfolio.page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="idx">01</span>
          <div className="card-body">
            <div className="card-header">
              <h2>Kiln</h2>
              <span className="domain-pill">kiln.toolfolio.page</span>
            </div>
            <p className="card-desc">
              Curated AI tools directory with hands-on notes, head-to-head comparisons, and
              uncompromising “skip-if” guidance.
            </p>
            <div className="feature-tags">
              <span className="ftag">Coding Agents</span>
              <span className="ftag">LLM Comparisons</span>
              <span className="ftag">Pricing Audits</span>
              <span className="ftag">Weekly Verified</span>
            </div>
          </div>
          <span className="go-btn">Explore Directory →</span>
        </a>

        <a
          className="site-card"
          href="https://rolepaper.toolfolio.page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="idx">02</span>
          <div className="card-body">
            <div className="card-header">
              <h2>Rolepaper</h2>
              <span className="domain-pill">rolepaper.toolfolio.page</span>
            </div>
            <p className="card-desc">
              Newspaper-style software and ML classifieds from public APIs. Electrical and embedded
              titles appear when the feeds actually list them — we do not pad empty desks.
            </p>
            <div className="feature-tags">
              <span className="ftag">Software & ML</span>
              <span className="ftag">Remote filters</span>
              <span className="ftag">Direct Apply Links</span>
              <span className="ftag">30-Day Auto-Expiry</span>
            </div>
          </div>
          <span className="go-btn">Browse Classifieds →</span>
        </a>

        <div className="site-card soon">
          <span className="idx">03</span>
          <div className="card-body">
            <div className="card-header">
              <h2>Floor Price</h2>
              <span className="domain-pill soon-pill">Coming soon</span>
            </div>
            <p className="card-desc">
              Hardware, gadget, and gaming gear price floors. Focused on historical lows rather than
              affiliate coupon mills.
            </p>
            <div className="feature-tags">
              <span className="ftag">Gaming Gear</span>
              <span className="ftag">Price History</span>
              <span className="ftag">Editorial Audits</span>
            </div>
          </div>
          <span className="go-btn soon-btn">In Research</span>
        </div>
      </div>

      <section className="ethos-panel">
        <h3>The Toolfolio Publishing Standard</h3>
        <p>
          Most directories scrape thousands of logos, inflate listings with duplicate keywords, and
          monetize fake affiliate rankings. Toolfolio was built to reverse that:
        </p>
        <ul className="ethos-list">
          <li>
            <strong>Total Vertical Separation:</strong> AI practitioners shouldn&apos;t dodge job ads, and jobseekers shouldn&apos;t wade through sponsor banners.
          </li>
          <li>
            <strong>Transparent Freshness:</strong> Every single review and listing displays its verified date or API fetch origin.
          </li>
          <li>
            <strong>Human Editorial Judgment:</strong> Every tool features a &ldquo;Who should skip this&rdquo; line before you spend a dime.
          </li>
        </ul>
      </section>
    </main>
  );
}
