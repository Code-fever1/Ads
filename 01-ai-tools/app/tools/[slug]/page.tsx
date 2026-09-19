import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/chrome";
import { Crumbs, Faq } from "@/components/faq";
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
        {tool.name} review
      </h1>
      <p className="lede" style={{ marginTop: 0 }}>
        {tool.name} is {tool.summary} Last verified{" "}
        <time dateTime={tool.lastVerified}>{formatDate(tool.lastVerified)}</time>. Kiln is not{" "}
        {tool.vendor}.
      </p>
      <p>
        {tool.vendor} ·{" "}
        <a href={tool.website} rel="noopener noreferrer" target="_blank">
          Official site
        </a>
      </p>
      <div className="meta-row">
        <span className="chip">
          Verified <time dateTime={tool.lastVerified}>{formatDate(tool.lastVerified)}</time>
        </span>
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
          <h2 className="section-label" style={{ marginTop: 0 }}>
            Who should use {tool.name}
          </h2>
          <p>{tool.bestFor}</p>
        </div>
        <div>
          <h2 className="section-label" style={{ marginTop: 0 }}>
            Who should skip {tool.name}
          </h2>
          <p>{tool.skipIf}</p>
        </div>
      </div>
      <h2 className="section-label">Field notes</h2>
      <ul>
        {tool.notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
      {related.rankings.length || related.comparisons.length ? (
        <>
          <h2 className="section-label">Where this sits in the catalog</h2>
          <div className="grid-links">
            {related.rankings.map((ranking) => (
              <Link key={ranking.slug} href={`/best/${ranking.slug}`}>
                {ranking.title}
              </Link>
            ))}
            {related.comparisons.map((comparison) => (
              <Link key={comparison.slug} href={`/compare/${comparison.slug}`}>
                {comparison.title}
              </Link>
            ))}
          </div>
        </>
      ) : null}
      <h2 className="section-label">Also consider</h2>
      <div className="grid-links">
        {tool.alternatives.map((alt) => {
          const relatedTool = getTool(alt);
          return relatedTool ? (
            <Link key={alt} href={`/tools/${relatedTool.slug}`}>
              {relatedTool.name}
            </Link>
          ) : null;
        })}
      </div>
      <p style={{ marginTop: "2rem" }}>
        <a className="btn btn-ochre" href={tool.website} rel="noopener noreferrer" target="_blank">
          Open {tool.name}
        </a>
      </p>
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
