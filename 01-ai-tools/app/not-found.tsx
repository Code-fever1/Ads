import type { Metadata } from "next";
import Link from "next/link";
import { HomeSearch } from "@/components/HomeSearch";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  const searchTools = tools.map((tool) => ({
    slug: tool.slug,
    name: tool.name,
    vendor: tool.vendor,
    bestFor: tool.bestFor,
    tasks: tool.tasks,
    categories: tool.categories,
    priceBand: tool.priceBand,
  }));

  return (
    <main>
      <p className="section-label">404 · Not Found</p>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3rem)", margin: "0 0 0.5rem" }}>
        Missing from the catalog
      </h1>
      <p className="lede">
        That tool or page is not listed at this URL. Search the verified catalog below or jump to a
        category.
      </p>

      <HomeSearch
        tools={searchTools}
        categories={categories.map((c) => ({ slug: c.slug, title: c.title }))}
      />

      <p style={{ marginTop: "1.5rem" }}>
        <Link href="/tools" className="btn btn-ochre">
          Browse all {tools.length} tools →
        </Link>
      </p>
    </main>
  );
}
