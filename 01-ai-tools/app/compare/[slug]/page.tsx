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
      <p className="section-label">Comparison</p>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3.2rem)" }}>
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
      <div className="split" style={{ marginTop: "2rem" }}>
        <section>
          <h2>When to pick {a?.name ?? comparison.a}</h2>
          <p>{comparison.pickA}</p>
        </section>
        <section>
          <h2>When to pick {b?.name ?? comparison.b}</h2>
          <p>{comparison.pickB}</p>
        </section>
      </div>
      <p className="section-label">Profiles</p>
      <div className="grid-links">
        {a ? <Link href={`/tools/${a.slug}`}>{a.name} review</Link> : null}
        {b ? <Link href={`/tools/${b.slug}`}>{b.name} review</Link> : null}
      </div>
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
