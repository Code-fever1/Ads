import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { comparisons, getComparison } from "@/data/comparisons";
import { getTool } from "@/data/tools";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return comparisons.map((comparison) => ({ slug: comparison.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) return { title: "Not found" };
  return { title: comparison.title, description: comparison.intro };
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) notFound();
  const a = getTool(comparison.a);
  const b = getTool(comparison.b);

  return (
    <main>
      <p className="section-label">Comparison</p>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3.2rem)" }}>
        {comparison.title}
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
      <div className="split" style={{ marginTop: "2rem" }}>
        <p>
          <strong>{a?.name}.</strong> {comparison.pickA}
        </p>
        <p>
          <strong>{b?.name}.</strong> {comparison.pickB}
        </p>
      </div>
      <p className="section-label">Profiles</p>
      <div className="grid-links">
        {a ? <Link href={`/tools/${a.slug}`}>{a.name}</Link> : null}
        {b ? <Link href={`/tools/${b.slug}`}>{b.name}</Link> : null}
      </div>
    </main>
  );
}
