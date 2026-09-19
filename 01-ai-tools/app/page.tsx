import Link from "next/link";
import { comparisons } from "@/data/comparisons";
import { categories } from "@/data/categories";
import { rankings } from "@/data/rankings";
import { tools } from "@/data/tools";
import { JsonLd } from "@/components/chrome";
import { orgJsonLd } from "@/lib/jsonld";
import { formatDate } from "@/lib/site";

export default function Home() {
  const featured = tools.filter((tool) =>
    ["cursor", "claude", "perplexity", "n8n", "midjourney", "notebooklm"].includes(tool.slug),
  );

  return (
    <main>
      <JsonLd data={orgJsonLd()} />
      <section className="hero">
        <div>
          <p className="section-label" style={{ marginTop: 0 }}>
            Catalog 01 · Sep 2026
          </p>
          <h1>Which AI tool still earns its seat.</h1>
          <p className="lede">
            Kiln is a dated directory of assistants, coding agents, image tools, and automations. Each
            entry has a skip-if line and a last-verified date. We send you to the vendor. Unrelated
            niches (jobs, gaming, coupons) live on other sites.
          </p>
        </div>
        <aside className="ochre-panel">
          <strong>What this is not</strong>
          <p style={{ margin: 0, lineHeight: 1.45 }}>
            Not a scrape of 2,000 logos. Not cracked software. Not medical or investment advice. If a
            page cannot say when it was checked, it does not belong here.
          </p>
        </aside>
      </section>

      <p className="section-label">On the bench today</p>
      <table className="catalog">
        <thead>
          <tr>
            <th>#</th>
            <th>Tool</th>
            <th>Job</th>
            <th>Price band</th>
            <th>Verified</th>
          </tr>
        </thead>
        <tbody>
          {featured.map((tool, index) => (
            <tr key={tool.slug}>
              <td className="num">{String(index + 1).padStart(2, "0")}</td>
              <td>
                <Link href={`/tools/${tool.slug}`}>{tool.name}</Link>
                <div>{tool.vendor}</div>
              </td>
              <td>{tool.bestFor}</td>
              <td>{tool.priceBand}</td>
              <td>{formatDate(tool.lastVerified)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="split" style={{ marginTop: "3rem" }}>
        <div>
          <p className="section-label" style={{ marginTop: 0 }}>
            Best-of pages
          </p>
          <div className="stack">
            {rankings.map((ranking) => (
              <Link key={ranking.slug} href={`/best/${ranking.slug}`}>
                {ranking.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="section-label" style={{ marginTop: 0 }}>
            Direct comparisons
          </p>
          <div className="stack">
            {comparisons.map((comparison) => (
              <Link key={comparison.slug} href={`/compare/${comparison.slug}`}>
                {comparison.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <p className="section-label">Categories</p>
      <div className="grid-links">
        {categories.map((category) => (
          <Link key={category.slug} href={`/categories/${category.slug}`}>
            {category.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
