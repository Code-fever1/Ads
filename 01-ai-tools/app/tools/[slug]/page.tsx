import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/chrome";
import { tools, getTool } from "@/data/tools";
import { breadcrumbJsonLd, softwareJsonLd } from "@/lib/jsonld";
import { formatDate } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return { title: "Not found" };
  return {
    title: `${tool.name} review`,
    description: tool.summary,
    alternates: { canonical: `/tools/${tool.slug}` },
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  return (
    <main>
      <JsonLd data={softwareJsonLd(tool)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools" },
          { name: tool.name, path: `/tools/${tool.slug}` },
        ])}
      />
      <p className="section-label" style={{ marginTop: "1.5rem" }}>
        Tool profile · {tool.status}
      </p>
      <h1
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(2.1rem, 4vw, 3.4rem)",
          margin: "0 0 0.4rem",
        }}
      >
        {tool.name}
      </h1>
      <p style={{ marginTop: 0 }}>
        {tool.vendor} ·{" "}
        <a href={tool.website} rel="noopener noreferrer" target="_blank">
          Official site
        </a>
      </p>
      <div className="meta-row">
        <span className="chip">Verified {formatDate(tool.lastVerified)}</span>
        <span className="chip">{tool.priceBand}</span>
        {tool.categories.map((category) => (
          <Link key={category} className="chip" href={`/categories/${category}`}>
            {category}
          </Link>
        ))}
      </div>
      <article className="prose">
        <p>{tool.body}</p>
      </article>
      <div className="split" style={{ marginTop: "2rem" }}>
        <div>
          <p className="section-label" style={{ marginTop: 0 }}>
            Use it when
          </p>
          <p>{tool.bestFor}</p>
        </div>
        <div>
          <p className="section-label" style={{ marginTop: 0 }}>
            Skip it when
          </p>
          <p>{tool.skipIf}</p>
        </div>
      </div>
      <p className="section-label">Field notes</p>
      <ul>
        {tool.notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
      <p className="section-label">Also consider</p>
      <div className="grid-links">
        {tool.alternatives.map((alt) => {
          const related = getTool(alt);
          return related ? (
            <Link key={alt} href={`/tools/${related.slug}`}>
              {related.name}
            </Link>
          ) : null;
        })}
      </div>
      <p style={{ marginTop: "2rem" }}>
        <a className="btn btn-ochre" href={tool.website} rel="noopener noreferrer" target="_blank">
          Open {tool.name}
        </a>
      </p>
    </main>
  );
}
