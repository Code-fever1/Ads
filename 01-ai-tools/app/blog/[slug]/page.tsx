import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/chrome";
import { Crumbs } from "@/components/faq";
import { getGuide, guides } from "@/data/guides";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";
import { formatDate } from "@/lib/site";

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
    modifiedTime: guide.date,
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <main>
      <JsonLd data={articleJsonLd(guide)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Notes", path: "/blog" },
          { name: guide.title, path: `/blog/${guide.slug}` },
        ])}
      />
      <Crumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Notes", href: "/blog" },
          { name: guide.title, href: `/blog/${guide.slug}` },
        ]}
      />
      <p className="section-label">
        Note · <time dateTime={guide.date}>{formatDate(guide.date)}</time>
      </p>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3.2rem)" }}>
        {guide.title}
      </h1>
      <article className="prose">
        {guide.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
}
