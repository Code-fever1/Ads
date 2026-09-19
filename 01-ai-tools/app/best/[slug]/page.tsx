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
      <p className="section-label">Best of · {ranking.keyword}</p>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3.2rem)" }}>
        {ranking.title} in 2026
      </h1>
      <article className="prose">
        <p>{ranking.intro}</p>
      </article>
      <h2 className="section-label">How we ranked this</h2>
      <ul>
        {ranking.criteria.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2 className="section-label">The shortlist</h2>
      <table className="catalog">
        <thead>
          <tr>
            <th>#</th>
            <th>Tool</th>
            <th>Why it is here</th>
            <th>Verified</th>
          </tr>
        </thead>
        <tbody>
          {ranked.map(({ index, tool }) => (
            <tr key={tool.slug}>
              <td className="num">{String(index + 1).padStart(2, "0")}</td>
              <td data-label="Tool">
                <Link href={`/tools/${tool.slug}`}>{tool.name}</Link>
              </td>
              <td data-label="Why it is here">{tool.bestFor}</td>
              <td data-label="Verified">
                <time dateTime={tool.lastVerified}>{formatDate(tool.lastVerified)}</time>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
