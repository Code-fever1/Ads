import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/chrome";
import { Crumbs } from "@/components/faq";
import { careerPages, getCareer } from "@/data/career";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return careerPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getCareer(slug);
  if (!page) return { title: "Not found" };
  return pageMeta({
    title: page.title,
    description: page.summary,
    path: `/career/${page.slug}`,
    type: "article",
    publishedTime: "2026-09-19",
    modifiedTime: "2026-09-19",
  });
}

export default async function CareerArticle({ params }: Props) {
  const { slug } = await params;
  const page = getCareer(slug);
  if (!page) notFound();
  return (
    <main>
      <JsonLd data={articleJsonLd(page)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Career desk", path: "/career" },
          { name: page.title, path: `/career/${page.slug}` },
        ])}
      />
      <Crumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Career desk", href: "/career" },
          { name: page.title, href: `/career/${page.slug}` },
        ]}
      />
      <h1>{page.title}</h1>
      <p className="flag">{page.summary}</p>
      <article className="essay">
        {page.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
}
