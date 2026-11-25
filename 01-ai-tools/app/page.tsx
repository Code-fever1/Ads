import Link from "next/link";
import { comparisons } from "@/data/comparisons";
import { categories } from "@/data/categories";
import { rankings } from "@/data/rankings";
import {
  getFeaturedTools,
  getRecentlyVerifiedTools,
  tools,
  toolsInCategory,
} from "@/data/tools";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/chrome";
import { HomeSearch } from "@/components/HomeSearch";
import { ToolLogo } from "@/components/ToolLogo";
import { PricingBadge } from "@/components/PricingBadge";
import { VerifiedDate } from "@/components/VerifiedDate";
import { BUILD_NOW_MS, formatEntryPrice } from "@/lib/format";
import { faqJsonLd, itemListJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export const metadata = pageMeta({
  title: "Find the Right AI Tool",
  description: site.description,
  path: "/",
  absoluteTitle: "Kiln — Find the Right AI Tool (Verified Prices, Honest Verdicts)",
});

const homeFaqs = [
  {
    question: "What is Kiln?",
    answer:
      "Kiln is a human-verified AI tools directory. Every listing shows checked pricing tiers, free-tier limits, a skip-if warning, and a visible verification date. We do not sell software.",
  },
  {
    question: "How do you keep prices honest?",
    answer:
      "Prices are checked manually on each vendor's public pricing page rather than scraped automatically. Any listing older than 45 days displays a visible amber warning asking you to re-check before paying.",
  },
  {
    question: "Can a vendor pay to change a verdict or ranking?",
    answer:
      "No. Affiliate or future sponsored labels never alter our pricing notes, rankings, or skip-if warnings. See /disclosure for full details.",
  },
];

export default function Home() {
  const featured = getFeaturedTools();
  const recent = getRecentlyVerifiedTools(6);
  const latestComparisons = comparisons.slice(0, 4);
  const nowMs = BUILD_NOW_MS;

  const searchTools = tools.map((tool) => ({
    slug: tool.slug,
    name: tool.name,
    vendor: tool.vendor,
    bestFor: tool.bestFor,
    tasks: tool.tasks,
    categories: tool.categories,
    priceBand: tool.priceBand,
  }));

  return (
    <main>
      <JsonLd
        data={itemListJsonLd(
          "Featured AI tools on Kiln",
          "/",
          featured.map((tool) => ({ name: tool.name, path: `/tools/${tool.slug}` })),
        )}
      />
      <JsonLd data={faqJsonLd(homeFaqs)} />

      <section className="hero">
        <div>
          <p className="section-label" style={{ marginTop: 0 }}>
            Curated AI Tools Directory · {tools.length} Verified Profiles
          </p>
          <h1>Find the right AI tool. Verified prices, honest verdicts.</h1>
          <p className="lede">
            Kiln is an independent directory at kiln.toolfolio.page. Every tool has checked pricing,
            free-tier notes, a &ldquo;who should skip this&rdquo; warning, and a visible verification
            date.
          </p>
          <HomeSearch
            tools={searchTools}
            categories={categories.map((c) => ({ slug: c.slug, title: c.title }))}
          />
        </div>
        <aside className="ochre-panel">
          <strong>What this is not</strong>
          <p style={{ margin: 0, lineHeight: 1.5 }}>
            Not an automated scrape of 5,000 dead links. Not cracked software. Not pay-to-win
            rankings. If a price has not been re-checked recently, we flag it openly so you do not
            get surprised at checkout.
          </p>
        </aside>
      </section>

      <div className="section-header-flex">
        <h2 className="section-label" style={{ margin: 0 }}>
          Featured tools
        </h2>
        <Link href="/tools" className="view-all-link">
          Browse all {tools.length} tools →
        </Link>
      </div>
      <div className="tool-cards-grid">
        {featured.map((tool) => (
          <article key={tool.slug} className="tool-card">
            <div className="tool-card-top">
              <div className="tool-card-identity">
                <ToolLogo tool={tool} size="md" />
                <div>
                  <h3 className="tool-card-name">
                    <Link href={`/tools/${tool.slug}`}>{tool.name}</Link>
                  </h3>
                  <p className="tool-card-vendor">{tool.vendor}</p>
                </div>
              </div>
              <PricingBadge model={tool.pricing} />
            </div>
            <p className="tool-card-tagline">{tool.summary}</p>
            <p className="tool-card-best">
              <strong>Best for:</strong> {tool.bestFor}
            </p>
            <div className="tool-card-pricing">
              <span className="entry-price-tag">{formatEntryPrice(tool)}</span>
              {tool.hasFreeTier && tool.freeTierNote ? (
                <span className="free-note-line">{tool.freeTierNote}</span>
              ) : null}
            </div>
            <div className="tool-card-footer">
              <VerifiedDate date={tool.lastVerified} referenceNowMs={nowMs} />
              <Link href={`/tools/${tool.slug}`} className="review-btn">
                Review →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <h2 className="section-label">Categories ({categories.length})</h2>
      <div className="category-grid-cards">
        {categories.map((category) => {
          const count = toolsInCategory(category.slug).length;
          return (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="category-grid-card"
            >
              <div className="category-grid-top">
                <span className="category-grid-name">{category.title}</span>
                <span className="category-grid-count">{count} tools</span>
              </div>
              <span className="category-grid-head">{category.headline}</span>
            </Link>
          );
        })}
      </div>

      <div className="section-header-flex" style={{ marginTop: "2.8rem" }}>
        <h2 className="section-label" style={{ margin: 0 }}>
          Latest comparisons
        </h2>
        <Link href="/compare" className="view-all-link">
          All {comparisons.length} comparisons →
        </Link>
      </div>
      <div className="other-comps-grid">
        {latestComparisons.map((comparison) => (
          <Link
            key={comparison.slug}
            href={`/compare/${comparison.slug}`}
            className="comp-nav-card"
          >
            <span className="comp-nav-vs">Head-to-Head</span>
            <span className="comp-nav-title">{comparison.title}</span>
            <span className="comp-nav-action">Read verdict →</span>
          </Link>
        ))}
      </div>

      <section className="freshness-promise-box" aria-labelledby="freshness-heading">
        <h2 id="freshness-heading">Our freshness promise</h2>
        <p>
          AI pricing shifts every few weeks—usage pools shrink, free tiers disappear, and Max tiers
          appear overnight. Every price on Kiln is checked by hand on the vendor&rsquo;s official
          page and stamped with its verification date. Whenever a check is older than 45 days, we
          display an explicit amber notice right beside the price box.
        </p>
      </section>

      <h2 className="section-label">Recently verified</h2>
      <table className="catalog">
        <thead>
          <tr>
            <th>Tool</th>
            <th>Vendor</th>
            <th>Entry price</th>
            <th>Verified</th>
          </tr>
        </thead>
        <tbody>
          {recent.map((tool) => (
            <tr key={tool.slug}>
              <td data-label="Tool">
                <Link href={`/tools/${tool.slug}`} style={{ fontWeight: 700 }}>
                  {tool.name}
                </Link>
              </td>
              <td data-label="Vendor">{tool.vendor}</td>
              <td data-label="Entry price">{formatEntryPrice(tool)}</td>
              <td data-label="Verified">
                <VerifiedDate date={tool.lastVerified} referenceNowMs={nowMs} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="split" style={{ marginTop: "3rem" }}>
        <div>
          <h2 className="section-label" style={{ marginTop: 0 }}>
            Best-of shortlists
          </h2>
          <div className="stack">
            {rankings.map((ranking) => (
              <Link key={ranking.slug} href={`/best/${ranking.slug}`}>
                {ranking.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="section-label" style={{ marginTop: 0 }}>
            All comparisons
          </h2>
          <div className="stack">
            {comparisons.map((comparison) => (
              <Link key={comparison.slug} href={`/compare/${comparison.slug}`}>
                {comparison.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Faq items={homeFaqs} />
    </main>
  );
}
