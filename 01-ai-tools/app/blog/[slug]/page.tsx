import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/chrome";
import { Crumbs } from "@/components/faq";
import { getGuide, guides } from "@/data/guides";
import { estimateReadingTime } from "@/lib/format";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";
import { formatDate } from "@/lib/site";

export const dynamic = "force-static";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: "Not found" };
  return pageMeta({
    title: guide.title,
    description: guide.summary,
    path: `/blog/${guide.slug}`,
    type: "article",
    publishedTime: guide.date,
    modifiedTime: guide.updatedDate ?? guide.date,
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const readingMinutes = estimateReadingTime(guide);
  const lastUpdated = guide.updatedDate ?? guide.date;
  const otherGuides = guides.filter((g) => g.slug !== guide.slug).slice(0, 4);

  return (
    <main>
      <JsonLd data={articleJsonLd(guide)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/blog" },
          { name: guide.title, path: `/blog/${guide.slug}` },
        ])}
      />
      <Crumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/blog" },
          { name: guide.title, href: `/blog/${guide.slug}` },
        ]}
      />
      <p className="section-label">
        Guide · Last updated <time dateTime={lastUpdated}>{formatDate(lastUpdated)}</time> ·{" "}
        {readingMinutes} min read
      </p>
      <h1
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(2rem,4vw,3.2rem)",
          margin: "0 0 0.75rem",
        }}
      >
        {guide.title}
      </h1>
      <p className="lede" style={{ marginTop: 0 }}>
        {guide.summary}
      </p>

      <article className="prose">
        {guide.body.map((paragraph) => (
          <p key={paragraph.slice(0, 28)}>{paragraph}</p>
        ))}

        {guide.sections?.map((sec) => (
          <section key={sec.heading} className="guide-section">
            <h2>{sec.heading}</h2>
            {sec.paragraphs.map((p) => (
              <p key={p.slice(0, 28)}>{p}</p>
            ))}
            {sec.bullets ? (
              <ul>
                {sec.bullets.map((item) => (
                  <li key={item.slice(0, 28)}>{item}</li>
                ))}
              </ul>
            ) : null}
            {sec.table ? (
              <div className="table-scroll guide-table">
                <table className="compare">
                  <thead>
                    <tr>
                      {sec.table.headers.map((header) => (
                        <th key={header}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sec.table.rows.map((row, idx) => (
                      <tr key={`${sec.heading}-row-${idx}`}>
                        {row.map((cell, cellIdx) => (
                          <td key={`${sec.heading}-cell-${idx}-${cellIdx}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </section>
        ))}
      </article>

      {otherGuides.length > 0 ? (
        <section className="other-rankings-section">
          <div className="section-header-flex">
            <h2 className="section-label" style={{ margin: 0 }}>
              More guides on Kiln
            </h2>
            <Link href="/blog" className="view-all-link">
              All guides ({guides.length}) →
            </Link>
          </div>
          <div className="other-guides-grid">
            {otherGuides.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="guide-nav-card">
                <span className="guide-kw">{formatDate(item.updatedDate ?? item.date)}</span>
                <span className="guide-title">{item.title}</span>
                <span className="guide-arrow">Read Guide →</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
