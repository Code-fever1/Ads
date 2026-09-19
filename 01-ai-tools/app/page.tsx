import Link from "next/link";
import { comparisons } from "@/data/comparisons";
import { categories } from "@/data/categories";
import { rankings } from "@/data/rankings";
import { tools } from "@/data/tools";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/chrome";
import { itemListJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";
import { formatDate, site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Best AI tools, ranked with last-verified dates",
  description: site.description,
  path: "/",
  absoluteTitle: `${site.name} · ${site.tagline}`,
});

export default function Home() {
  const featured = tools.filter((tool) =>
    ["cursor", "claude", "perplexity", "n8n", "midjourney", "notebooklm"].includes(tool.slug),
  );

  return (
    <main>
      <JsonLd
        data={itemListJsonLd(
          "Featured AI tools on Kiln",
          "/",
          featured.map((tool) => ({ name: tool.name, path: `/tools/${tool.slug}` })),
        )}
      />
      <section className="hero">
        <div>
          <p className="section-label" style={{ marginTop: 0 }}>
            Catalog 01 · Sep 2026
          </p>
          <h1>Which AI tool still earns its seat.</h1>
          <p className="lede">
            Kiln is an independent AI tools directory at kiln.toolfolio.page. Each listing is a product
            with a public site, a last-verified date, and a skip-if line. We send you to the vendor. We
            are not ChatGPT, Claude, or Cursor — we review them.
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
              <td>
                <time dateTime={tool.lastVerified}>{formatDate(tool.lastVerified)}</time>
              </td>
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

      <Faq
        items={[
          {
            question: "What is Kiln?",
            answer:
              "Kiln is a dated AI tools directory. We list assistants, coding agents, image tools, and automations with skip-if notes and a last-verified date. We do not sell the software.",
          },
          {
            question: "How do you pick the best AI tool?",
            answer:
              "We rank for a job, not a leaderboard. A coding page is editors and agents. A writing page is models, checkers, and platforms. Criteria sit on each best-of page. Method: /methodology.",
          },
          {
            question: "Is this ChatGPT, Claude, or another vendor?",
            answer:
              "No. Kiln is independent. Official product pages are linked from each profile. Jobs live on Rolepaper, not here.",
          },
        ]}
      />
    </main>
  );
}
