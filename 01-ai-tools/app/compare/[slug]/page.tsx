import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/chrome";
import { Crumbs, Faq } from "@/components/faq";
import { PricingBadge } from "@/components/PricingBadge";
import { ToolLogo } from "@/components/ToolLogo";
import { comparisons, getComparison } from "@/data/comparisons";
import { getTool } from "@/data/tools";
import { formatEntryPrice } from "@/lib/format";
import {
  breadcrumbJsonLd,
  comparisonJsonLd,
  faqJsonLd,
  webPageJsonLd,
} from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";
import { formatDate } from "@/lib/site";
import type { Tool } from "@/lib/types";

export const dynamic = "force-static";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return comparisons.map((comparison) => ({ slug: comparison.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) return { title: "Not found" };
  return pageMeta({
    title: `${comparison.title} (2026): Which Is Better?`,
    description: comparison.verdict,
    path: `/compare/${comparison.slug}`,
    modifiedTime: comparison.updatedDate,
  });
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) notFound();

  const comparedTools = comparison.tools
    .map((toolSlug) => getTool(toolSlug))
    .filter((item): item is Tool => Boolean(item));

  const otherComparisons = comparisons.filter((c) => c.slug !== comparison.slug);

  return (
    <main>
      <JsonLd
        data={webPageJsonLd({
          name: `${comparison.title} (2026): Which Is Better?`,
          description: comparison.verdict,
          path: `/compare/${comparison.slug}`,
          dateModified: comparison.updatedDate,
          about: comparison.title,
        })}
      />
      <JsonLd data={comparisonJsonLd(comparison, comparedTools)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare" },
          { name: comparison.title, path: `/compare/${comparison.slug}` },
        ])}
      />
      <JsonLd data={faqJsonLd(comparison.faqs)} />

      <Crumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
          { name: comparison.title, href: `/compare/${comparison.slug}` },
        ]}
      />

      <p className="section-label" style={{ marginTop: "1.5rem" }}>
        Head-to-Head Comparison · Updated{" "}
        <time dateTime={comparison.updatedDate}>{formatDate(comparison.updatedDate)}</time>
      </p>
      <h1
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(2rem,4vw,3.2rem)",
          margin: "0 0 0.65rem",
        }}
      >
        {comparison.title} (2026)
      </h1>

      <section className="verdict-box" aria-labelledby="verdict-heading">
        <h2 id="verdict-heading">The short verdict</h2>
        <p>{comparison.verdict}</p>
      </section>

      <article className="prose">
        <p>{comparison.intro}</p>
      </article>

      <div className="table-scroll">
        <table className="compare">
          <thead>
            <tr>
              <th>Dimension</th>
              {comparison.tools.map((toolSlug) => {
                const tool = getTool(toolSlug);
                return (
                  <th key={toolSlug}>
                    {tool ? (
                      <Link href={`/tools/${tool.slug}`}>{tool.name}</Link>
                    ) : (
                      toolSlug
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                {row.values.map((val, idx) => (
                  <td key={`${row.label}-${idx}`}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="picks-grid">
        {comparison.picks.map((entry) => {
          const tool = getTool(entry.slug);
          return (
            <section key={entry.slug} className="verdict-card use-card">
              <h2 className="section-label" style={{ marginTop: 0 }}>
                When to pick {tool?.name ?? entry.slug}
              </h2>
              <p style={{ margin: 0 }}>{entry.pick}</p>
            </section>
          );
        })}
      </div>

      <h2 className="section-label" style={{ marginTop: "2.5rem" }}>
        Tool mini-profiles &amp; full reviews
      </h2>
      <div className="tool-cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {comparedTools.map((tool) => (
          <article key={tool.slug} className="comp-profile-card">
            <div className="comp-card-top">
              <div className="tool-card-identity">
                <ToolLogo tool={tool} size="sm" />
                <div>
                  <h3 style={{ margin: 0, fontSize: "1.2rem" }}>
                    <Link href={`/tools/${tool.slug}`}>{tool.name}</Link>
                  </h3>
                  <p className="comp-vendor">{tool.vendor}</p>
                </div>
              </div>
              <PricingBadge model={tool.pricing} />
            </div>
            <p className="entry-price-tag" style={{ margin: "0.35rem 0 0" }}>
              {formatEntryPrice(tool)}
            </p>
            <p className="comp-desc" style={{ marginBottom: "0.35rem" }}>
              <strong>Best for:</strong> {tool.bestFor}
            </p>
            <div className="alt-skip">
              <strong>Skip if:</strong> {tool.skipIf}
            </div>
            <div className="comp-card-actions" style={{ marginTop: "auto" }}>
              <Link href={`/tools/${tool.slug}`} className="btn btn-ochre small">
                Read {tool.name} Review →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {otherComparisons.length > 0 && (
        <section className="other-comparisons-section">
          <div className="section-header-flex">
            <h2 className="section-label" style={{ margin: 0 }}>
              More Head-to-Head Comparisons
            </h2>
            <Link href="/compare" className="view-all-link">
              View all ({comparisons.length}) →
            </Link>
          </div>
          <div className="other-comps-grid">
            {otherComparisons.slice(0, 6).map((comp) => (
              <Link key={comp.slug} href={`/compare/${comp.slug}`} className="comp-nav-card">
                <span className="comp-nav-vs">Versus</span>
                <span className="comp-nav-title">{comp.title}</span>
                <span className="comp-nav-action">Compare Picks →</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Faq items={comparison.faqs} />
    </main>
  );
}
