import Link from "next/link";
import { categories } from "@/data/categories";
import { toolsInCategory } from "@/data/tools";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({
  title: "AI Tool Categories — Curated Directory",
  description:
    "Browse Kiln's 10 verified AI tool categories, from coding editors and terminal agents to writing, image, video, and workflow automation.",
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <main>
      <p className="section-label">Directory Index</p>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3rem)", margin: "0 0 0.5rem" }}>
        AI tool categories
      </h1>
      <p className="lede">
        Every tool is grouped by the job it actually performs—with verified prices and skip-if
        criteria inside each hub.
      </p>
      <div className="category-grid-cards" style={{ marginTop: "1.75rem" }}>
        {categories.map((category) => {
          const count = toolsInCategory(category.slug).length;
          return (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="category-grid-card"
            >
              <div className="category-grid-top">
                <span className="category-grid-name">{category.title}</span>
                <span className="category-grid-count">{count} tools</span>
              </div>
              <span className="category-grid-head">{category.headline}</span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
