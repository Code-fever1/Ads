import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";
import { toolsInCategory } from "@/data/tools";

export const metadata: Metadata = {
  title: "Categories",
  description: "AI tool categories on Kiln, from assistants to automation.",
};

export default function CategoriesPage() {
  return (
    <main>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3rem)" }}>
        Categories
      </h1>
      <div className="stack" style={{ marginTop: "1.5rem" }}>
        {categories.map((category) => (
          <section key={category.slug}>
            <h2 style={{ marginBottom: 0 }}>
              <Link href={`/categories/${category.slug}`}>{category.title}</Link>
            </h2>
            <p style={{ marginTop: "0.35rem" }}>
              {toolsInCategory(category.slug).length} tools · {category.headline}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
