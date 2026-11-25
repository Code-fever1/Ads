import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/chrome";
import { Crumbs, Faq } from "@/components/faq";
import { PricingBadge } from "@/components/PricingBadge";
import { ToolLogo } from "@/components/ToolLogo";
import { VerifiedDate } from "@/components/VerifiedDate";
import { getRanking, rankings } from "@/data/rankings";
import { getTool } from "@/data/tools";
import { BUILD_NOW_MS, formatEntryPrice } from "@/lib/format";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  rankingJsonLd,
  webPageJsonLd,
} from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";
import { formatDate } from "@/lib/site";

export const dynamic = "force-static";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return rankings.map((ranking) => ({ slug: ranking.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ranking = getRanking(slug);
  if (!ranking) return { title: "Not found" };
  return pageMeta({
    title: `${ranking.title} in 2026 — Tested & Ranked`,
    description: ranking.intro,
    path: `/best/${ranking.slug}`,
    modifiedTime: ranking.updatedDate,
  });
}

export default async function RankingPage({ params }: Props) {
  const { slug } = await params;
  const ranking = getRanking(slug);
  if (!ranking) notFound();

  const ranked = ranking.toolSlugs
    .map((toolSlug, index) => ({ index, tool: getTool(toolSlug) }))
    .filter((row): row is { index: number; tool: NonNullable<ReturnType<typeof getTool>> } =>
      Boolean(row.tool),
    );

  const topThree = ranked.slice(0, 3);
  const otherRankings = rankings.filter((r) => r.slug !== ranking.slug);
  const podiumBadges = ["#1 Editor's Choice", "#2 Runner-Up", "#3 Specialist Pick"];
  const nowMs = BUILD_NOW_MS;

  return (
    <main>
      <JsonLd
        data={webPageJsonLd({
          name: `${ranking.title} in 2026`,
          description: ranking.intro,
          path: `/best/${ranking.slug}`,
          dateModified: ranking.updatedDate,
          about: ranking.keyword,
        })}
      />
      <JsonLd data={rankingJsonLd(ranking, ranked.map((row) => row.tool))} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Best of", path: "/best" },
          { name: ranking.title, path: `/best/${ranking.slug}` },
        ])}
      />
      <JsonLd data={faqJsonLd(ranking.faqs)} />

      <Crumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Best of", href: "/best" },
          { name: ranking.title, href: `/best/${ranking.slug}` },
        ]}
      />

      <p className="section-label" style={{ marginTop: "1.5rem" }}>
        Curated Ranking · Updated{" "}
        <time dateTime={ranking.updatedDate}>{formatDate(ranking.updatedDate)}</time>
      </p>
      <h1
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(2rem,4vw,3.2rem)",
          margin: "0 0 0.5rem",
        }}
      >
        {ranking.title} in 2026
      </h1>
      <article className="prose">
        <p>{ranking.intro}</p>
      </article>

      <h2 className="section-label" style={{ marginTop: "2rem" }}>
        Evaluation &amp; selection criteria
      </h2>
      <ul className="notes-list">
        {ranking.criteria.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {topThree.length > 0 && (
        <section className="podium-section">
          <h2 className="section-label">Top recommended picks</h2>
          <div className="podium-grid">
            {topThree.map(({ tool }, idx) => (
              <div key={tool.slug} className={`podium-card rank-${idx + 1}`}>
                <div className="podium-badge">{podiumBadges[idx]}</div>
                <div className="podium-head">
                  <div className="tool-card-identity">
                    <ToolLogo tool={tool} size="sm" />
                    <div>
                      <h3 className="podium-name">
                        <Link href={`/tools/${tool.slug}`}>{tool.name}</Link>
                      </h3>
                      <span className="podium-vendor">{tool.vendor}</span>
                    </div>
                  </div>
                  <PricingBadge model={tool.pricing} />
                </div>
                <p className="podium-best">
                  <strong>Best for:</strong> {tool.bestFor}
                </p>
                <div className="podium-skip">
                  <strong>Skip if:</strong> {tool.skipIf}
                </div>
                <div className="podium-actions">
                  <Link href={`/tools/${tool.slug}`} className="btn btn-ochre small">
                    Read Review →
                  </Link>
                  <span className="podium-vendor-link">{formatEntryPrice(tool)}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <h2 className="section-label" style={{ marginTop: "2.5rem" }}>
        Summary table ({ranked.length} tools)
      </h2>
      <div className="table-scroll">
        <table className="catalog">
          <thead>
            <tr>
              <th>#</th>
              <th>Tool</th>
              <th>Best for</th>
              <th>Entry price</th>
              <th>Free tier</th>
              <th>Verified</th>
            </tr>
          </thead>
          <tbody>
            {ranked.map(({ index, tool }) => (
              <tr key={tool.slug}>
                <td className="num">{String(index + 1).padStart(2, "0")}</td>
                <td data-label="Tool">
                  <Link href={`/tools/${tool.slug}`} style={{ fontWeight: 700 }}>
                    {tool.name}
                  </Link>
                  <div style={{ fontSize: "0.78rem", color: "var(--soot)" }}>{tool.vendor}</div>
                </td>
                <td data-label="Best for">{tool.bestFor}</td>
                <td data-label="Entry price">{formatEntryPrice(tool)}</td>
                <td data-label="Free tier">{tool.hasFreeTier ? "Yes" : "No"}</td>
                <td data-label="Verified">
                  <VerifiedDate date={tool.lastVerified} referenceNowMs={nowMs} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="section-label" style={{ marginTop: "2.5rem" }}>
        Ranked breakdown &amp; verdicts
      </h2>
      <div className="stack">
        {ranked.map(({ index, tool }) => {
          const verdict = ranking.toolVerdicts[tool.slug] ?? tool.summary;
          return (
            <article key={tool.slug} className="tool-card">
              <div className="tool-card-top">
                <div className="tool-card-identity">
                  <span className="num" style={{ width: "auto", fontWeight: 700 }}>
                    #{index + 1}
                  </span>
                  <ToolLogo tool={tool} size="sm" />
                  <div>
                    <h3 className="tool-card-name">
                      <Link href={`/tools/${tool.slug}`}>{tool.name}</Link>
                    </h3>
                    <p className="tool-card-vendor">
                      {tool.vendor} · {formatEntryPrice(tool)}
                    </p>
                  </div>
                </div>
                <PricingBadge model={tool.pricing} />
              </div>
              <p className="tool-card-tagline">{verdict}</p>
              <div className="alt-skip">
                <strong>Skip if:</strong> {tool.skipIf}
              </div>
              <div className="tool-card-footer">
                <VerifiedDate date={tool.lastVerified} referenceNowMs={nowMs} />
                <Link href={`/tools/${tool.slug}`} className="review-btn">
                  Full {tool.name} profile →
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {otherRankings.length > 0 && (
        <section className="other-rankings-section">
          <div className="section-header-flex">
            <h2 className="section-label" style={{ margin: 0 }}>
              Explore other best-of guides
            </h2>
            <Link href="/best" className="view-all-link">
              View all ({rankings.length}) →
            </Link>
          </div>
          <div className="other-guides-grid">
            {otherRankings.slice(0, 6).map((r) => (
              <Link key={r.slug} href={`/best/${r.slug}`} className="guide-nav-card">
                <span className="guide-kw">{r.toolSlugs.length} tools</span>
                <span className="guide-title">{r.title}</span>
                <span className="guide-arrow">Read Guide →</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Faq items={ranking.faqs} />
    </main>
  );
}
