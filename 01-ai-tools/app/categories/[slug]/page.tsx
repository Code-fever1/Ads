import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/chrome";
import { Crumbs, Faq } from "@/components/faq";
import { PricingBadge } from "@/components/PricingBadge";
import { ToolLogo } from "@/components/ToolLogo";
import { VerifiedDate } from "@/components/VerifiedDate";
import { categories, getCategory } from "@/data/categories";
import { comparisons } from "@/data/comparisons";
import { rankings } from "@/data/rankings";
import { toolsInCategory } from "@/data/tools";
import { BUILD_NOW_MS, formatEntryPrice } from "@/lib/format";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  itemListJsonLd,
  webPageJsonLd,
} from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Not found" };
  return pageMeta({
    title: `Best ${category.title} — Verified Prices & Reviews`,
    description: category.intro,
    path: `/categories/${category.slug}`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const list = toolsInCategory(category.slug);
  const categorySlugs = new Set(list.map((tool) => tool.slug));
  const relatedComparisons = comparisons.filter((comp) =>
    comp.tools.some((toolSlug) => categorySlugs.has(toolSlug)),
  );
  const relatedRankings = rankings.filter(
    (ranking) =>
      ranking.toolSlugs.filter((toolSlug) => categorySlugs.has(toolSlug)).length >= 2,
  );
  const nowMs = BUILD_NOW_MS;

  return (
    <main>
      <JsonLd
        data={webPageJsonLd({
          name: `Best ${category.title}`,
          description: category.intro,
          path: `/categories/${category.slug}`,
          about: category.title,
        })}
      />
      <JsonLd
        data={itemListJsonLd(
          category.title,
          `/categories/${category.slug}`,
          list.map((tool) => ({ name: tool.name, path: `/tools/${tool.slug}` })),
        )}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Categories", path: "/categories" },
          { name: category.title, path: `/categories/${category.slug}` },
        ])}
      />
      <JsonLd data={faqJsonLd(category.faqs)} />

      <Crumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Categories", href: "/categories" },
          { name: category.title, href: `/categories/${category.slug}` },
        ]}
      />

      <p className="section-label">
        Category · {list.length} verified {list.length === 1 ? "tool" : "tools"}
      </p>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3.2rem)", margin: "0 0 0.5rem" }}>
        {category.title}
      </h1>
      <p className="lede">{category.headline}</p>
      <article className="prose">
        <p>{category.intro}</p>
      </article>

      <div className="tool-cards-grid" style={{ marginTop: "1.75rem" }}>
        {list.map((tool) => (
          <article key={tool.slug} className="tool-card">
            <div className="tool-card-top">
              <div className="tool-card-identity">
                <ToolLogo tool={tool} size="md" />
                <div>
                  <h2 className="tool-card-name">
                    <Link href={`/tools/${tool.slug}`}>{tool.name}</Link>
                  </h2>
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

      {relatedComparisons.length > 0 || relatedRankings.length > 0 ? (
        <section className="curated-lists-section">
          <h2 className="section-label">Comparisons &amp; best-of guides for {category.title}</h2>
          <div className="grid-links">
            {relatedRankings.map((ranking) => (
              <Link
                key={ranking.slug}
                href={`/best/${ranking.slug}`}
                className="related-link-card"
              >
                <span className="related-card-type">Best-Of Guide</span>
                <span className="related-card-title">{ranking.title}</span>
              </Link>
            ))}
            {relatedComparisons.map((comp) => (
              <Link
                key={comp.slug}
                href={`/compare/${comp.slug}`}
                className="related-link-card"
              >
                <span className="related-card-type">Comparison</span>
                <span className="related-card-title">{comp.title}</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <Faq items={category.faqs} />
    </main>
  );
}
