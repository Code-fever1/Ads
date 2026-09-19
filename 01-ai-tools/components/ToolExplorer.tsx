"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Tool, CategorySlug } from "@/lib/types";
import { formatDate } from "@/lib/site";

interface ToolExplorerProps {
  initialTools: Tool[];
  availableCategories: { slug: CategorySlug; title: string }[];
}

export function ToolExplorer({ initialTools, availableCategories }: ToolExplorerProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategorySlug | "all">("all");
  const [selectedPricing, setSelectedPricing] = useState("all");
  const [spotlightTool, setSpotlightTool] = useState<Tool | null>(null);

  const pricingOptions = [
    { label: "All Pricing", value: "all" },
    { label: "Freemium", value: "freemium" },
    { label: "Paid", value: "paid" },
    { label: "Free / Open", value: "free" },
  ];

  const filteredTools = useMemo(() => {
    return initialTools.filter((tool) => {
      const matchesSearch =
        search === "" ||
        tool.name.toLowerCase().includes(search.toLowerCase()) ||
        tool.vendor.toLowerCase().includes(search.toLowerCase()) ||
        tool.bestFor.toLowerCase().includes(search.toLowerCase()) ||
        tool.summary.toLowerCase().includes(search.toLowerCase()) ||
        tool.categories.some((c) => c.toLowerCase().includes(search.toLowerCase()));

      const matchesCat =
        selectedCategory === "all" || tool.categories.includes(selectedCategory);

      const matchesPrice =
        selectedPricing === "all" ||
        tool.pricing.toLowerCase() === selectedPricing.toLowerCase() ||
        (selectedPricing === "free" &&
          (tool.pricing.toLowerCase() === "free" || tool.pricing.toLowerCase().includes("open")));

      return matchesSearch && matchesCat && matchesPrice;
    });
  }, [initialTools, search, selectedCategory, selectedPricing]);

  function pickRandomTool() {
    const pool = filteredTools.length > 0 ? filteredTools : initialTools;
    const randomIndex = Math.floor(Math.random() * pool.length);
    const chosen = pool[randomIndex];
    setSpotlightTool(chosen);
  }

  return (
    <div className="explorer-root">
      {/* Interactive Search & Controls Bar */}
      <div className="explorer-controls">
        <div className="search-box">
          <span className="search-icon" aria-hidden="true">
            ⌕
          </span>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by tool name, capability, or vendor (e.g. 'code', 'Claude', 'research')..."
            className="explorer-input"
            aria-label="Search tools"
          />
          {search && (
            <button
              type="button"
              className="clear-search"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={pickRandomTool}
          className="btn-spotlight"
          title="Pick an unexpected verified tool"
        >
          <span>🎲 Surprise Me</span>
        </button>
      </div>

      {/* Category Pills Strip */}
      <div className="category-strip" role="tablist" aria-label="Tool Categories">
        <button
          type="button"
          role="tab"
          aria-selected={selectedCategory === "all"}
          className={`cat-pill ${selectedCategory === "all" ? "active" : ""}`}
          onClick={() => setSelectedCategory("all")}
        >
          All Categories ({initialTools.length})
        </button>
        {availableCategories.map((cat) => {
          const count = initialTools.filter((t) => t.categories.includes(cat.slug)).length;
          return (
            <button
              key={cat.slug}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat.slug}
              className={`cat-pill ${selectedCategory === cat.slug ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat.slug)}
            >
              {cat.title} ({count})
            </button>
          );
        })}
      </div>

      {/* Pricing Filters & Results Count */}
      <div className="sub-filters">
        <div className="pricing-pills">
          <span className="filter-label">Pricing:</span>
          {pricingOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={`price-pill ${selectedPricing === opt.value ? "active" : ""}`}
              onClick={() => setSelectedPricing(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="results-badge">
          Showing <strong>{filteredTools.length}</strong> of {initialTools.length} verified listings
        </div>
      </div>

      {/* Spotlight Drawer if User Triggered Random */}
      {spotlightTool && (
        <div className="spotlight-card">
          <div className="spotlight-header">
            <span className="spotlight-tag">Editorial Spotlight</span>
            <button
              type="button"
              className="spotlight-close"
              onClick={() => setSpotlightTool(null)}
            >
              ✕ Close
            </button>
          </div>
          <div className="spotlight-body">
            <h3>{spotlightTool.name}</h3>
            <p className="spotlight-summary">{spotlightTool.summary}</p>
            <div className="spotlight-meta">
              <span><strong>Best for:</strong> {spotlightTool.bestFor}</span>
              <span className="skip-line"><strong>Skip if:</strong> {spotlightTool.skipIf}</span>
            </div>
            <div className="spotlight-actions">
              <Link href={`/tools/${spotlightTool.slug}`} className="btn btn-ochre">
                Read Full In-Depth Review →
              </Link>
              <button
                type="button"
                className="btn-next-random"
                onClick={pickRandomTool}
              >
                Roll Another Tool 🎲
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Catalog Table */}
      {filteredTools.length === 0 ? (
        <div className="no-results">
          <p>No tools matched &ldquo;{search}&rdquo; with the selected filters.</p>
          <button
            type="button"
            className="btn btn-ochre"
            onClick={() => {
              setSearch("");
              setSelectedCategory("all");
              setSelectedPricing("all");
            }}
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="catalog-wrap">
          <table className="catalog interactive-catalog">
            <thead>
              <tr>
                <th>#</th>
                <th>Tool & Vendor</th>
                <th>Categories</th>
                <th>Best For & Price</th>
                <th>Verified</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTools.map((tool, index) => (
                <tr key={tool.slug} className="tool-row">
                  <td className="num">{String(index + 1).padStart(2, "0")}</td>
                  <td data-label="Tool">
                    <Link href={`/tools/${tool.slug}`} className="tool-name-link">
                      {tool.name}
                    </Link>
                    <div className="tool-vendor">{tool.vendor}</div>
                  </td>
                  <td data-label="Categories">
                    <div className="tool-cat-tags">
                      {tool.categories.slice(0, 3).map((c) => (
                        <button
                          key={c}
                          type="button"
                          className="table-cat-tag"
                          onClick={() => setSelectedCategory(c)}
                          title={`Filter by ${c}`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </td>
                  <td data-label="Job">
                    <div className="tool-best-job">{tool.bestFor}</div>
                    <div className="tool-price-tag">{tool.priceBand}</div>
                  </td>
                  <td data-label="Verified">
                    <time dateTime={tool.lastVerified}>{formatDate(tool.lastVerified)}</time>
                  </td>
                  <td data-label="Review">
                    <Link href={`/tools/${tool.slug}`} className="review-btn">
                      Profile →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
