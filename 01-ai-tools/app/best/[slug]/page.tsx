import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRanking, rankings } from "@/data/rankings";
import { getTool } from "@/data/tools";
import { formatDate } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return rankings.map((ranking) => ({ slug: ranking.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ranking = getRanking(slug);
  if (!ranking) return { title: "Not found" };
  return { title: ranking.title, description: ranking.intro };
}

export default async function RankingPage({ params }: Props) {
  const { slug } = await params;
  const ranking = getRanking(slug);
  if (!ranking) notFound();
  const ranked = ranking.toolSlugs.map((toolSlug, index) => ({
    index,
    tool: getTool(toolSlug),
  }));

  return (
    <main>
      <p className="section-label">Best of · {ranking.keyword}</p>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3.2rem)" }}>
        {ranking.title}
      </h1>
      <article className="prose">
        <p>{ranking.intro}</p>
      </article>
      <p className="section-label">Criteria</p>
      <ul>
        {ranking.criteria.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
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
          {ranked.map(({ index, tool }) =>
            tool ? (
              <tr key={tool.slug}>
                <td className="num">{String(index + 1).padStart(2, "0")}</td>
                <td>
                  <Link href={`/tools/${tool.slug}`}>{tool.name}</Link>
                </td>
                <td>{tool.bestFor}</td>
                <td>{formatDate(tool.lastVerified)}</td>
              </tr>
            ) : null,
          )}
        </tbody>
      </table>
    </main>
  );
}
