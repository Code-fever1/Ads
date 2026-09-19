import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { careerPages, getCareer } from "@/data/career";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return careerPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getCareer(slug);
  if (!page) return { title: "Not found" };
  return { title: page.title, description: page.summary };
}

export default async function CareerArticle({ params }: Props) {
  const { slug } = await params;
  const page = getCareer(slug);
  if (!page) notFound();
  return (
    <main>
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
