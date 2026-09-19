import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/data/categories";
import { toolsInCategory } from "@/data/tools";
import { formatDate } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Not found" };
  return { title: category.title, description: category.intro };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const list = toolsInCategory(category.slug);

  return (
    <main>
      <p className="section-label">Category</p>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3.2rem)" }}>
        {category.title}
      </h1>
      <p className="lede">{category.headline}</p>
      <article className="prose">
        <p>{category.intro}</p>
      </article>
      <table className="catalog">
        <thead>
          <tr>
            <th>Tool</th>
            <th>Best for</th>
            <th>Verified</th>
          </tr>
        </thead>
        <tbody>
          {list.map((tool) => (
            <tr key={tool.slug}>
              <td>
                <Link href={`/tools/${tool.slug}`}>{tool.name}</Link>
              </td>
              <td>{tool.bestFor}</td>
              <td>{formatDate(tool.lastVerified)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
