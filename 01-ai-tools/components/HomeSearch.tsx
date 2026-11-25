"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { CategorySlug } from "@/lib/types";

export type HomeSearchTool = {
  slug: string;
  name: string;
  vendor: string;
  bestFor: string;
  tasks: string[];
  categories: CategorySlug[];
  priceBand: string;
};

export function HomeSearch({
  tools,
  categories,
}: {
  tools: HomeSearchTool[];
  categories: { slug: CategorySlug; title: string }[];
}) {
  const [query, setQuery] = useState("");

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return tools
      .filter(
        (tool) =>
          tool.name.toLowerCase().includes(q) ||
          tool.vendor.toLowerCase().includes(q) ||
          tool.bestFor.toLowerCase().includes(q) ||
          tool.tasks.some((task) => task.toLowerCase().includes(q)) ||
          tool.categories.some((cat) => cat.toLowerCase().includes(q)),
      )
      .slice(0, 6);
  }, [query, tools]);

  return (
    <div className="home-search">
      <div className="search-box">
        <span className="search-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="4.8" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10.7 10.7L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search AI tools or tasks (e.g. Cursor, refactor-code, PDFs)..."
          className="explorer-input"
          aria-label="Search AI tools and tasks"
        />
        {query ? (
          <button
            type="button"
            className="clear-search"
            onClick={() => setQuery("")}
            aria-label="Clear search"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 4l8 8M12 4L4 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        ) : null}
      </div>

      {query.trim() ? (
        <div className="home-search-results" role="region" aria-label="Search results">
          {matches.length === 0 ? (
            <p className="home-search-empty">
              No tools matched &ldquo;{query}&rdquo;.{" "}
              <Link href="/tools">Browse all {tools.length} tools</Link>.
            </p>
          ) : (
            <ul>
              {matches.map((tool) => (
                <li key={tool.slug}>
                  <Link href={`/tools/${tool.slug}`} className="home-search-link">
                    <span className="home-search-title">
                      <strong>{tool.name}</strong> · {tool.vendor}
                    </span>
                    <span className="home-search-meta">{tool.bestFor}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}

      <div className="quick-cats" aria-label="Quick category links">
        {categories.slice(0, 6).map((cat) => (
          <Link key={cat.slug} href={`/categories/${cat.slug}`} className="quick-cat-pill">
            {cat.title}
          </Link>
        ))}
        <Link href="/tools" className="quick-cat-pill quick-cat-all">
          All {tools.length} tools →
        </Link>
      </div>
    </div>
  );
}
