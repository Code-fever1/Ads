import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/chrome";
import { Crumbs, Faq } from "@/components/faq";
import { ShareButton } from "@/components/ShareButton";
import { tools, getTool } from "@/data/tools";
import {
  breadcrumbJsonLd,
  softwareJsonLd,
  webPageJsonLd,
} from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";
import { formatDate, relatedForTool } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return { title: "Not found" };
  return pageMeta({
    title: `${tool.name} review (2026)`,
    description: `${tool.summary} Last verified ${tool.lastVerified}. Skip it if ${tool.skipIf}`,
    path: `/tools/${tool.slug}`,
    modifiedTime: tool.lastVerified,
  });
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const related = relatedForTool(tool.slug);

  // Next / Previous tool for continuous browsing loop
  const currentIndex = tools.findIndex((t) => t.slug === tool.slug);
  const prevTool = tools[(currentIndex - 1 + tools.length) % tools.length];
  const nextTool = tools[(currentIndex + 1) % tools.length];

  return (
    <main>
      <JsonLd data={softwareJsonLd(tool)} />
      <JsonLd
        data={webPageJsonLd({
          name: `${tool.name} review`,
          description: tool.summary,
          path: `/tools/${tool.slug}`,
          dateModified: tool.lastVerified,
          about: tool.name,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools" },
          { name: tool.name, path: `/tools/${tool.slug}` },
        ])}
      />
      <Crumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
          { name: tool.name, href: `/tools/${tool.slug}` },
        ]}
      />

      <div className="tool-title-section">
        <p className="section-label" style={{ marginTop: "1.5rem" }}>
          Verified Tool Profile · {tool.status}
        </p>
        <div className="title-share-lockup">
          <h1
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(2.1rem, 4vw, 3.4rem)",
              margin: "0 0 0.4rem",
            }}
          >
            {tool.name} review
          </h1>
          <ShareButton title={`${tool.name} review`} url={`/tools/${tool.slug}`} />
        </div>
      </div>

      <p className="lede" style={{ marginTop: 0 }}>
        {tool.name} is {tool.summary} Last verified{" "}
        <time dateTime={tool.lastVerified}>{formatDate(tool.lastVerified)}</time>. Kiln is an
        independent reviewer and not affiliated with {tool.vendor}.
      </p>

      <div className="vendor-strip">
        <span>Vendor: <strong>{tool.vendor}</strong></span>
        <span>·</span>
        <a href={tool.website} rel="noopener noreferrer" target="_blank" className="vendor-link">
          Official Site ↗
        </a>
      </div>

      <div className="meta-row">
        <span className="chip verified-chip">
          Verified <time dateTime={tool.lastVerified}>{formatDate(tool.lastVerified)}</time>
        </span>
        <span className="chip pricing-chip">{tool.priceBand}</span>
        {tool.categories.map((category) => (
          <Link key={category} className="chip cat-chip" href={`/categories/${category}`}>
            {category}
          </Link>
        ))}
      </div>

      <article className="prose">
        <p>{tool.body}</p>
      </article>

      <div className="split review-split" style={{ marginTop: "2rem" }}>
        <div className="verdict-card use-card">
          <h2 className="section-label" style={{ marginTop: 0 }}>
            ✓ Who should use {tool.name}
          </h2>
          <p>{tool.bestFor}</p>
        </div>
        <div className="verdict-card skip-card">
          <h2 className="section-label" style={{ marginTop: 0 }}>
            ✕ Who should skip {tool.name}
          </h2>
          <p>{tool.skipIf}</p>
        </div>
      </div>

      <h2 className="section-label" style={{ marginTop: "2.5rem" }}>Field notes & Observations</h2>
      <ul className="notes-list">
        {tool.notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>

      {related.rankings.length || related.comparisons.length ? (
        <div className="curated-lists-section">
          <h2 className="section-label">Where this sits in the catalog</h2>
          <div className="grid-links">
            {related.rankings.map((ranking) => (
              <Link key={ranking.slug} href={`/best/${ranking.slug}`} className="related-link-card">
                <span className="related-card-type">Best-Of Guide</span>
                <span className="related-card-title">{ranking.title}</span>
              </Link>
            ))}
            {related.comparisons.map((comparison) => (
              <Link key={comparison.slug} href={`/compare/${comparison.slug}`} className="related-link-card">
                <span className="related-card-type">Comparison</span>
                <span className="related-card-title">{comparison.title}</span>
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      {/* Visual Rich Alternative Cards to boost click-throughs */}
      <section className="alternatives-section">
        <div className="section-header-flex">
          <h2 className="section-label" style={{ margin: 0 }}>
            Direct Alternatives to Consider
          </h2>
          <Link href="/tools" className="view-all-link">
            Open full catalog ({tools.length}) →
          </Link>
        </div>

        <div className="alternative-cards-grid">
          {tool.alternatives.map((alt) => {
            const relatedTool = getTool(alt);
            if (!relatedTool) return null;
            return (
              <div key={alt} className="alt-card">
                <div className="alt-card-top">
                  <div>
                    <h3 className="alt-name">
                      <Link href={`/tools/${relatedTool.slug}`}>{relatedTool.name}</Link>
                    </h3>
                    <span className="alt-vendor">{relatedTool.vendor}</span>
                  </div>
                  <span className="alt-price">{relatedTool.pricing}</span>
                </div>
                <p className="alt-desc">{relatedTool.bestFor}</p>
                <div className="alt-skip">
                  <strong>Skip if:</strong> {relatedTool.skipIf}
                </div>
                <div className="alt-footer">
                  <Link href={`/tools/${relatedTool.slug}`} className="alt-read-btn">
                    Read Review →
                  </Link>
                  <a
                    href={relatedTool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="alt-ext-link"
                  >
                    Site ↗
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Continuous Exploration Bar (Previous / Next Review) */}
      <nav className="review-carousel-nav" aria-label="Review Navigation">
        <Link href={`/tools/${prevTool.slug}`} className="carousel-nav-link prev">
          <span className="nav-dir">← Previous Review</span>
          <span className="nav-title">{prevTool.name}</span>
          <span className="nav-sub">{prevTool.vendor}</span>
        </Link>
        <Link href={`/tools/${nextTool.slug}`} className="carousel-nav-link next">
          <span className="nav-dir">Next Review →</span>
          <span className="nav-title">{nextTool.name}</span>
          <span className="nav-sub">{nextTool.vendor}</span>
        </Link>
      </nav>

      {/* Official Outbound Callout */}
      <div className="outbound-bar">
        <p>Ready to test {tool.name} yourself? Visit the official provider page.</p>
        <a className="btn btn-ochre" href={tool.website} rel="noopener noreferrer" target="_blank">
          Open {tool.name} ({tool.vendor}) ↗
        </a>
      </div>

      <Faq
        items={[
          {
            question: `What is ${tool.name}?`,
            answer: `${tool.name} is ${tool.summary}`,
          },
          {
            question: `When should I skip ${tool.name}?`,
            answer: tool.skipIf,
          },
          {
            question: `When was ${tool.name} last checked?`,
            answer: `Kiln last verified the public product or pricing page on ${formatDate(tool.lastVerified)}. Re-open the vendor site before you buy.`,
          },
        ]}
      />
    </main>
  );
}
