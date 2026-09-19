import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/chrome";
import { Crumbs } from "@/components/faq";
import { categories, getCategory } from "@/data/categories";
import { toolsInCategory } from "@/data/tools";
import { breadcrumbJsonLd, itemListJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";
import { formatDate } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Not found" };
  return pageMeta({
    title: `${category.title} — AI tools`,
    description: category.intro.slice(0, 160),
    path: `/categories/${category.slug}`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const list = toolsInCategory(category.slug);

  return (
    <main>
      <JsonLd
        data={webPageJsonLd({
          name: category.title,
          description: category.intro,
          path: `/categories/${category.slug}`,
          about: category.title,
        })}
      />
      <JsonLd
        data={itemListJsonLd(
          category.title,
          `/categories/${category.slug}`,
          list.map((tool) => ({ name: tool.name, path: `/tools/${tool.slug}` })),
        )}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Categories", path: "/categories" },
          { name: category.title, path: `/categories/${category.slug}` },
        ])}
      />
      <Crumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Categories", href: "/categories" },
          { name: category.title, href: `/categories/${category.slug}` },
        ]}
      />
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
              <td>
                <time dateTime={tool.lastVerified}>{formatDate(tool.lastVerified)}</time>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
