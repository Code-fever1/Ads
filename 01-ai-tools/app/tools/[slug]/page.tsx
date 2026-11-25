import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/chrome";
import { Crumbs, Faq } from "@/components/faq";
import { PricingBadge } from "@/components/PricingBadge";
import { ShareButton } from "@/components/ShareButton";
import { ToolLogo } from "@/components/ToolLogo";
import { VerifiedDate } from "@/components/VerifiedDate";
import { getCategory } from "@/data/categories";
import { getTool, tools } from "@/data/tools";
import { BUILD_NOW_MS, formatEntryPrice, formatTierPrice } from "@/lib/format";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  softwareJsonLd,
  webPageJsonLd,
} from "@/lib/jsonld";
import { pageMeta, truncateText } from "@/lib/seo";
import { formatDate, relatedForTool } from "@/lib/site";
import type { FaqItem, Tool } from "@/lib/types";

export const dynamic = "force-static";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return { title: "Not found" };

  const titleCandidate = `${tool.name} — Pricing, Free Tier & Honest Review`;
  const title = titleCandidate.length > 53 ? `${tool.name} — Pricing & Review` : titleCandidate;
  const description = truncateText(
    `${tool.summary} Verified ${tool.lastVerified}. Best for ${tool.bestFor} Skip if ${tool.skipIf}`,
    155,
  );

  return pageMeta({
    title,
    description,
    path: `/tools/${tool.slug}`,
    modifiedTime: tool.lastVerified,
  });
}

function buildToolFaqs(tool: Tool, alternatives: Tool[]): FaqItem[] {
  const altNames = alternatives.map((a) => a.name).join(", ");
  const entry = formatEntryPrice(tool);
  return [
    {
      question: `How much does ${tool.name} cost?`,
      answer: `${tool.priceBand} (${entry}). Kiln verified this against ${tool.vendor}'s public pricing on ${formatDate(tool.lastVerified)}; confirm on the official site before subscribing.`,
    },
    {
      question: `Does ${tool.name} have a free tier?`,
      answer: tool.hasFreeTier
        ? `Yes. ${tool.freeTierNote || `${tool.name} offers a free entry tier with usage caps.`}`
        : `No meaningful ongoing free tier. ${tool.name} requires a paid plan (${tool.priceBand}).`,
    },
    {
      question: `Who is ${tool.name} best for, and when should I skip it?`,
      answer: `Best for: ${tool.bestFor}. Skip it if: ${tool.skipIf}.`,
    },
    {
      question: `What are the best alternatives to ${tool.name}?`,
      answer: altNames
        ? `Top alternatives in Kiln's catalog include ${altNames}. Compare them below or open our head-to-head comparison tables.`
        : `Browse the category hub to compare ${tool.name} against other verified tools in the same workflow.`,
    },
  ];
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const related = relatedForTool(tool.slug);
  const primaryCatSlug = tool.categories[0];
  const primaryCategory = primaryCatSlug ? getCategory(primaryCatSlug) : undefined;
  const alternativeTools = tool.alternatives
    .map((alt) => getTool(alt))
    .filter((item): item is Tool => Boolean(item));
  const faqs = buildToolFaqs(tool, alternativeTools);

  const currentIndex = tools.findIndex((t) => t.slug === tool.slug);
  const prevTool = tools[(currentIndex - 1 + tools.length) % tools.length];
  const nextTool = tools[(currentIndex + 1) % tools.length];
  const referenceNowMs = BUILD_NOW_MS;

  const outboundUrl = tool.affiliateUrl ?? tool.website;
  const outboundRel = tool.affiliateUrl
    ? "nofollow sponsored noopener noreferrer"
    : "noopener noreferrer";

  const crumbItems = [
    { name: "Home", href: "/" },
    { name: "Tools", href: "/tools" },
    ...(primaryCategory
      ? [{ name: primaryCategory.title, href: `/categories/${primaryCategory.slug}` }]
      : []),
    { name: tool.name, href: `/tools/${tool.slug}` },
  ];

  return (
    <main>
      <JsonLd data={softwareJsonLd(tool)} />
      <JsonLd
        data={webPageJsonLd({
          name: `${tool.name} — Pricing, Free Tier & Honest Review`,
          description: tool.summary,
          path: `/tools/${tool.slug}`,
          dateModified: tool.lastVerified,
          about: tool.name,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd(
          crumbItems.map((item) => ({ name: item.name, path: item.href })),
        )}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      <Crumbs items={crumbItems} />

      <div className="tool-title-section">
        <p className="section-label" style={{ marginTop: "1.25rem" }}>
          Verified Tool Profile · {tool.status}
        </p>
        <div className="tool-detail-header">
          <div className="tool-detail-identity">
            <ToolLogo tool={tool} size="lg" />
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  margin: "0 0 0.25rem",
                  lineHeight: 1.08,
                }}
              >
                {tool.name}
              </h1>
              <div className="vendor-strip" style={{ margin: 0 }}>
                <span>
                  by <strong>{tool.vendor}</strong>
                </span>
                <PricingBadge model={tool.pricing} />
              </div>
            </div>
          </div>

          <div className="tool-detail-actions">
            <ShareButton title={`${tool.name} review`} url={`/tools/${tool.slug}`} />
            <a
              href={outboundUrl}
              rel={outboundRel}
              target="_blank"
              className="btn btn-ochre"
            >
              Visit official site ↗
            </a>
          </div>
        </div>
      </div>

      <p className="lede" style={{ marginTop: "1.1rem" }}>
        {tool.summary} Checked by {tool.verifiedBy} on{" "}
        <time dateTime={tool.lastVerified}>{formatDate(tool.lastVerified)}</time>. Kiln is
        independent and not affiliated with {tool.vendor}.
      </p>

      <div className="meta-row">
        {tool.categories.map((categorySlug) => {
          const cat = getCategory(categorySlug);
          return (
            <Link key={categorySlug} className="chip cat-chip" href={`/categories/${categorySlug}`}>
              {cat?.title ?? categorySlug}
            </Link>
          );
        })}
        {tool.tasks.map((task) => (
          <span key={task} className="chip">
            {task}
          </span>
        ))}
      </div>

      <section className="price-box" aria-labelledby="pricing-heading">
        <div className="price-box-head">
          <h2 id="pricing-heading" className="section-label" style={{ margin: 0 }}>
            Verified pricing &amp; free tier
          </h2>
          <span className="entry-price-tag">{tool.priceBand}</span>
        </div>

        <div className="tier-list">
          {tool.pricingTiers.map((tier) => (
            <div key={tier.name} className="tier-card">
              <div className="tier-name">{tier.name}</div>
              <div className="tier-price">{formatTierPrice(tier)}</div>
              <p className="tier-note">{tier.note}</p>
            </div>
          ))}
        </div>

        <p className="free-tier-box">
          <strong>Free tier:</strong>{" "}
          {tool.hasFreeTier
            ? tool.freeTierNote || "Free tier available."
            : "No ongoing free tier."}
        </p>

        <VerifiedDate
          date={tool.lastVerified}
          variant="banner"
          referenceNowMs={referenceNowMs}
        />
      </section>

      <article className="prose">
        <p>{tool.body}</p>
      </article>

      <div className="split review-split" style={{ marginTop: "2rem" }}>
        <div className="verdict-card use-card">
          <h2 className="section-label" style={{ marginTop: 0 }}>
            Best for
          </h2>
          <p style={{ margin: 0 }}>{tool.bestFor}</p>
        </div>
        <div className="verdict-card skip-card">
          <h2 className="section-label" style={{ marginTop: 0 }}>
            Who should skip {tool.name}
          </h2>
          <p style={{ margin: 0 }}>{tool.skipIf}</p>
        </div>
      </div>

      <div className="split" style={{ marginTop: "2rem" }}>
        <div>
          <h2 className="section-label" style={{ marginTop: 0 }}>
            Key features
          </h2>
          <ul className="notes-list">
            {tool.keyFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="section-label" style={{ marginTop: 0 }}>
            Honest limitations
          </h2>
          <ul className="notes-list">
            {tool.limitations.map((limitation) => (
              <li key={limitation}>{limitation}</li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="section-label" style={{ marginTop: "2rem" }}>
        Field notes &amp; observations
      </h2>
      <ul className="notes-list">
        {tool.notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>

      {related.rankings.length || related.comparisons.length ? (
        <div className="curated-lists-section">
          <h2 className="section-label">Where {tool.name} is compared &amp; ranked</h2>
          <div className="grid-links">
            {related.comparisons.map((comparison) => (
              <Link
                key={comparison.slug}
                href={`/compare/${comparison.slug}`}
                className="related-link-card"
              >
                <span className="related-card-type">Comparison</span>
                <span className="related-card-title">{comparison.title}</span>
              </Link>
            ))}
            {related.rankings.map((ranking) => (
              <Link
                key={ranking.slug}
                href={`/best/${ranking.slug}`}
                className="related-link-card"
              >
                <span className="related-card-type">Best-Of List</span>
                <span className="related-card-title">{ranking.title}</span>
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      <section className="alternatives-section">
        <div className="section-header-flex">
          <h2 className="section-label" style={{ margin: 0 }}>
            Alternatives to {tool.name}
          </h2>
          <Link href="/tools" className="view-all-link">
            Open full catalog ({tools.length}) →
          </Link>
        </div>

        <div className="alternative-cards-grid">
          {alternativeTools.map((relatedTool) => (
            <div key={relatedTool.slug} className="alt-card">
              <div className="alt-card-top">
                <div className="tool-card-identity">
                  <ToolLogo tool={relatedTool} size="sm" />
                  <div>
                    <h3 className="alt-name">
                      <Link href={`/tools/${relatedTool.slug}`}>{relatedTool.name}</Link>
                    </h3>
                    <span className="alt-vendor">{relatedTool.vendor}</span>
                  </div>
                </div>
                <PricingBadge model={relatedTool.pricing} />
              </div>
              <p className="alt-desc">{relatedTool.bestFor}</p>
              <div className="alt-skip">
                <strong>Skip if:</strong> {relatedTool.skipIf}
              </div>
              <div className="alt-footer">
                <Link href={`/tools/${relatedTool.slug}`} className="alt-read-btn">
                  Read Review →
                </Link>
                <span className="alt-ext-link">{formatEntryPrice(relatedTool)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

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

      <div className="outbound-bar">
        <p>Ready to check {tool.name} directly? Confirm live plans on {tool.vendor}&rsquo;s site.</p>
        <a className="btn btn-ochre" href={outboundUrl} rel={outboundRel} target="_blank">
          Visit {tool.name} ({tool.vendor}) ↗
        </a>
      </div>

      <Faq items={faqs} />
    </main>
  );
}
