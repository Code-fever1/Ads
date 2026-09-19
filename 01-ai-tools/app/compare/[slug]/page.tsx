import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/chrome";
import { Crumbs, Faq } from "@/components/faq";
import { comparisons, getComparison } from "@/data/comparisons";
import { getTool } from "@/data/tools";
import { breadcrumbJsonLd, comparisonJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return comparisons.map((comparison) => ({ slug: comparison.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) return { title: "Not found" };
  return pageMeta({
    title: `${comparison.title}: which to pick in 2026`,
    description: comparison.intro.slice(0, 160),
    path: `/compare/${comparison.slug}`,
  });
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) notFound();
  const a = getTool(comparison.a);
  const b = getTool(comparison.b);

  const otherComparisons = comparisons.filter((c) => c.slug !== comparison.slug);

  return (
    <main>
      <JsonLd
        data={webPageJsonLd({
          name: comparison.title,
          description: comparison.intro,
          path: `/compare/${comparison.slug}`,
          about: comparison.title,
        })}
      />
      <JsonLd data={comparisonJsonLd(comparison, a, b)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare" },
          { name: comparison.title, path: `/compare/${comparison.slug}` },
        ])}
      />
      <Crumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
          { name: comparison.title, href: `/compare/${comparison.slug}` },
        ]}
      />

      <p className="section-label" style={{ marginTop: "1.5rem" }}>Head-to-Head Comparison</p>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3.2rem)", margin: "0 0 0.5rem" }}>
        {comparison.title}: which to pick
      </h1>
      <article className="prose">
        <p>{comparison.intro}</p>
      </article>

      <table className="compare">
        <thead>
          <tr>
            <th>Dimension</th>
            <th>{a?.name ?? comparison.a}</th>
            <th>{b?.name ?? comparison.b}</th>
          </tr>
        </thead>
        <tbody>
          {comparison.rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              <td>{row.a}</td>
              <td>{row.b}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="split review-split" style={{ marginTop: "2rem" }}>
        <section className="verdict-card use-card">
          <h2 className="section-label" style={{ marginTop: 0 }}>
            When to pick {a?.name ?? comparison.a}
          </h2>
          <p style={{ margin: 0 }}>{comparison.pickA}</p>
        </section>
        <section className="verdict-card use-card">
          <h2 className="section-label" style={{ marginTop: 0 }}>
            When to pick {b?.name ?? comparison.b}
          </h2>
          <p style={{ margin: 0 }}>{comparison.pickB}</p>
        </section>
      </div>

      {/* Deep-Dive Profile Cards */}
      <h2 className="section-label" style={{ marginTop: "2.5rem" }}>Full Dedicated Reviews</h2>
      <div className="comparison-profiles-grid">
        {a && (
          <div className="comp-profile-card">
            <div className="comp-card-top">
              <span className="comp-role-tag">Option A</span>
              <span className="comp-price">{a.pricing}</span>
            </div>
            <h3>{a.name}</h3>
            <p className="comp-vendor">by {a.vendor}</p>
            <p className="comp-desc">{a.bestFor}</p>
            <div className="comp-card-actions">
              <Link href={`/tools/${a.slug}`} className="btn btn-ochre small">
                Read {a.name} Review →
              </Link>
              <a href={a.website} target="_blank" rel="noopener noreferrer" className="alt-ext-link">
                Official Site ↗
              </a>
            </div>
          </div>
        )}
        {b && (
          <div className="comp-profile-card">
            <div className="comp-card-top">
              <span className="comp-role-tag">Option B</span>
              <span className="comp-price">{b.pricing}</span>
            </div>
            <h3>{b.name}</h3>
            <p className="comp-vendor">by {b.vendor}</p>
            <p className="comp-desc">{b.bestFor}</p>
            <div className="comp-card-actions">
              <Link href={`/tools/${b.slug}`} className="btn btn-ochre small">
                Read {b.name} Review →
              </Link>
              <a href={b.website} target="_blank" rel="noopener noreferrer" className="alt-ext-link">
                Official Site ↗
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Cross-Discovery: Other Comparisons */}
      {otherComparisons.length > 0 && (
        <section className="other-comparisons-section">
          <div className="section-header-flex">
            <h2 className="section-label" style={{ margin: 0 }}>
              Other Head-to-Head Comparisons
            </h2>
            <Link href="/compare" className="view-all-link">
              View all comparisons ({comparisons.length}) →
            </Link>
          </div>
          <div className="other-comps-grid">
            {otherComparisons.map((comp) => (
              <Link key={comp.slug} href={`/compare/${comp.slug}`} className="comp-nav-card">
                <span className="comp-nav-vs">Versus</span>
                <span className="comp-nav-title">{comp.title}</span>
                <span className="comp-nav-action">Compare Picks →</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Faq
        items={[
          {
            question: `Should I choose ${a?.name ?? comparison.a} or ${b?.name ?? comparison.b}?`,
            answer: `${comparison.pickA} ${comparison.pickB}`,
          },
          {
            question: "Does Kiln rank a winner?",
            answer:
              "No single winner. The table is jobs, not IQ scores. Open both profiles if you still cannot pick from the two pick-lines.",
          },
        ]}
      />
    </main>
  );
}
