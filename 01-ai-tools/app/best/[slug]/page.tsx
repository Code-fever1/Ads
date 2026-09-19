import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/chrome";
import { Crumbs, Faq } from "@/components/faq";
import { getRanking, rankings } from "@/data/rankings";
import { getTool } from "@/data/tools";
import { breadcrumbJsonLd, rankingJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";
import { formatDate } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return rankings.map((ranking) => ({ slug: ranking.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ranking = getRanking(slug);
  if (!ranking) return { title: "Not found" };
  return pageMeta({
    title: `${ranking.title} (2026)`,
    description: ranking.intro.slice(0, 160),
    path: `/best/${ranking.slug}`,
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

  const podiumBadges = ["🥇 #1 Editor's Choice", "🥈 #2 Runner-Up", "🥉 #3 Specialist Pick"];

  return (
    <main>
      <JsonLd
        data={webPageJsonLd({
          name: ranking.title,
          description: ranking.intro,
          path: `/best/${ranking.slug}`,
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
      <Crumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Best of", href: "/best" },
          { name: ranking.title, href: `/best/${ranking.slug}` },
        ]}
      />

      <p className="section-label" style={{ marginTop: "1.5rem" }}>
        Curated Guide · {ranking.keyword}
      </p>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3.2rem)", margin: "0 0 0.5rem" }}>
        {ranking.title} in 2026
      </h1>
      <article className="prose">
        <p>{ranking.intro}</p>
      </article>

      <h2 className="section-label" style={{ marginTop: "2rem" }}>Evaluation & Selection Criteria</h2>
      <ul className="criteria-list">
        {ranking.criteria.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* Top 3 Podium Cards */}
      {topThree.length > 0 && (
        <section className="podium-section">
          <h2 className="section-label">Top Recommended Picks</h2>
          <div className="podium-grid">
            {topThree.map(({ tool }, idx) => (
              <div key={tool.slug} className={`podium-card rank-${idx + 1}`}>
                <div className="podium-badge">{podiumBadges[idx]}</div>
                <div className="podium-head">
                  <div>
                    <h3 className="podium-name">
                      <Link href={`/tools/${tool.slug}`}>{tool.name}</Link>
                    </h3>
                    <span className="podium-vendor">{tool.vendor}</span>
                  </div>
                  <span className="podium-price">{tool.pricing}</span>
                </div>
                <p className="podium-best">
                  <strong>Why it earned this spot:</strong> {tool.bestFor}
                </p>
                <div className="podium-skip">
                  <strong>Skip if:</strong> {tool.skipIf}
                </div>
                <div className="podium-actions">
                  <Link href={`/tools/${tool.slug}`} className="btn btn-ochre small">
                    Read Full Review →
                  </Link>
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="podium-vendor-link"
                  >
                    Official Site ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Full Catalog Table */}
      <h2 className="section-label" style={{ marginTop: "2.5rem" }}>
        The Complete Shortlist ({ranked.length} Tools)
      </h2>
      <table className="catalog">
        <thead>
          <tr>
            <th>#</th>
            <th>Tool</th>
            <th>Why it is here</th>
            <th>Verified</th>
            <th>Action</th>
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
              <td data-label="Why it is here">{tool.bestFor}</td>
              <td data-label="Verified">
                <time dateTime={tool.lastVerified}>{formatDate(tool.lastVerified)}</time>
              </td>
              <td data-label="Action">
                <Link href={`/tools/${tool.slug}`} className="review-btn">
                  Profile →
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Cross-Discovery: Other Best-Of Guides */}
      {otherRankings.length > 0 && (
        <section className="other-rankings-section">
          <div className="section-header-flex">
            <h2 className="section-label" style={{ margin: 0 }}>
              Explore Other Best-Of Curations
            </h2>
            <Link href="/best" className="view-all-link">
              View all guides ({rankings.length}) →
            </Link>
          </div>
          <div className="other-guides-grid">
            {otherRankings.map((r) => (
              <Link key={r.slug} href={`/best/${r.slug}`} className="guide-nav-card">
                <span className="guide-kw">{r.keyword}</span>
                <span className="guide-title">{r.title}</span>
                <span className="guide-arrow">Read Guide →</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Faq
        items={[
          {
            question: `What is the best pick on this list?`,
            answer: ranked[0]
              ? `${ranked[0].tool.name} is first because ${ranked[0].tool.bestFor}. Read the skip-if line on its profile before you pay.`
              : ranking.intro,
          },
          {
            question: "Does Kiln sell these tools?",
            answer:
              "No. Kiln is a directory. Each row links to a Kiln profile and then to the vendor. Rankings drop sunset products.",
          },
        ]}
      />
    </main>
  );
}
