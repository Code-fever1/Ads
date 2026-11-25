"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { CategorySlug, PricingModel, Tool } from "@/lib/types";
import { formatDate } from "@/lib/site";
import { formatEntryPrice, isStaleDate } from "@/lib/format";
import { ToolLogo } from "@/components/ToolLogo";
import { PricingBadge } from "@/components/PricingBadge";

interface ToolExplorerProps {
  initialTools: Tool[];
  availableCategories: { slug: CategorySlug; title: string }[];
  referenceNowMs: number;
}

type SortKey = "featured" | "name" | "verified";

export function ToolExplorer({
  initialTools,
  availableCategories,
  referenceNowMs,
}: ToolExplorerProps) {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<CategorySlug[]>([]);
  const [selectedPricing, setSelectedPricing] = useState<PricingModel | "all">("all");
  const [freeTierOnly, setFreeTierOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortKey>("featured");
  const [spotlightTool, setSpotlightTool] = useState<Tool | null>(null);

  const pricingOptions: { label: string; value: PricingModel | "all" }[] = [
    { label: "All Pricing", value: "all" },
    { label: "Free", value: "free" },
    { label: "Freemium", value: "freemium" },
    { label: "Paid", value: "paid" },
    { label: "Usage", value: "usage" },
  ];

  function toggleCategory(slug: CategorySlug) {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((item) => item !== slug) : [...prev, slug],
    );
  }

  const filteredTools = useMemo(() => {
    const q = search.trim().toLowerCase();
    const matched = initialTools.filter((tool) => {
      const matchesSearch =
        q === "" ||
        tool.name.toLowerCase().includes(q) ||
        tool.vendor.toLowerCase().includes(q) ||
        tool.bestFor.toLowerCase().includes(q) ||
        tool.summary.toLowerCase().includes(q) ||
        tool.tasks.some((t) => t.toLowerCase().includes(q)) ||
        tool.categories.some((c) => c.toLowerCase().includes(q));

      const matchesCat =
        selectedCategories.length === 0 ||
        selectedCategories.some((cat) => tool.categories.includes(cat));

      const matchesPrice =
        selectedPricing === "all" || tool.pricing === selectedPricing;

      const matchesFree = !freeTierOnly || tool.hasFreeTier;

      return matchesSearch && matchesCat && matchesPrice && matchesFree;
    });

    return [...matched].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "verified") {
        return b.lastVerified.localeCompare(a.lastVerified) || a.name.localeCompare(b.name);
      }
      // Default: featured first, then A-Z
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return a.name.localeCompare(b.name);
    });
  }, [initialTools, search, selectedCategories, selectedPricing, freeTierOnly, sortBy]);

  function pickRandomTool() {
    const pool = filteredTools.length > 0 ? filteredTools : initialTools;
    const randomIndex = Math.floor(Math.random() * pool.length);
    setSpotlightTool(pool[randomIndex]);
  }

  function resetAll() {
    setSearch("");
    setSelectedCategories([]);
    setSelectedPricing("all");
    setFreeTierOnly(false);
    setSortBy("featured");
  }

  return (
    <div className="explorer-root">
      <div className="explorer-controls">
        <div className="search-box">
          <span className="search-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="4.8" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10.7 10.7L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by tool name, task, or vendor (e.g. 'refactor-code', 'Claude', 'research')..."
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
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 4l8 8M12 4L4 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={pickRandomTool}
          className="btn-spotlight"
          title="Pick a random verified tool"
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="5.5" cy="5.5" r="1" fill="currentColor" />
            <circle cx="10.5" cy="10.5" r="1" fill="currentColor" />
            <circle cx="8" cy="8" r="1" fill="currentColor" />
          </svg>
          <span>Random Pick</span>
        </button>
      </div>

      <div className="category-strip" role="group" aria-label="Filter by category (multi-select)">
        <button
          type="button"
          aria-pressed={selectedCategories.length === 0}
          className={`cat-pill ${selectedCategories.length === 0 ? "active" : ""}`}
          onClick={() => setSelectedCategories([])}
        >
          All Categories ({initialTools.length})
        </button>
        {availableCategories.map((cat) => {
          const count = initialTools.filter((t) => t.categories.includes(cat.slug)).length;
          const active = selectedCategories.includes(cat.slug);
          return (
            <button
              key={cat.slug}
              type="button"
              aria-pressed={active}
              className={`cat-pill ${active ? "active" : ""}`}
              onClick={() => toggleCategory(cat.slug)}
            >
              {cat.title} ({count})
            </button>
          );
        })}
      </div>

      <div className="sub-filters">
        <div className="pricing-pills">
          <span className="filter-label">Pricing:</span>
          {pricingOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              aria-pressed={selectedPricing === opt.value}
              className={`price-pill ${selectedPricing === opt.value ? "active" : ""}`}
              onClick={() => setSelectedPricing(opt.value)}
            >
              {opt.label}
            </button>
          ))}
          <label className="free-tier-toggle">
            <input
              type="checkbox"
              checked={freeTierOnly}
              onChange={(e) => setFreeTierOnly(e.target.checked)}
            />
            <span>Has free tier</span>
          </label>
        </div>

        <div className="sort-and-count">
          <label className="sort-label">
            <span>Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              className="sort-select"
              aria-label="Sort tools"
            >
              <option value="featured">Featured first</option>
              <option value="name">Name (A–Z)</option>
              <option value="verified">Recently verified</option>
            </select>
          </label>
          <div className="results-badge">
            Showing <strong>{filteredTools.length}</strong> of {initialTools.length}
          </div>
        </div>
      </div>

      {spotlightTool && (
        <div className="spotlight-card">
          <div className="spotlight-header">
            <span className="spotlight-tag">Editorial Spotlight</span>
            <button
              type="button"
              className="spotlight-close"
              onClick={() => setSpotlightTool(null)}
            >
              Close
            </button>
          </div>
          <div className="spotlight-body">
            <h3>{spotlightTool.name}</h3>
            <p className="spotlight-summary">{spotlightTool.summary}</p>
            <div className="spotlight-meta">
              <span>
                <strong>Best for:</strong> {spotlightTool.bestFor}
              </span>
              <span className="skip-line">
                <strong>Skip if:</strong> {spotlightTool.skipIf}
              </span>
            </div>
            <div className="spotlight-actions">
              <Link href={`/tools/${spotlightTool.slug}`} className="btn btn-ochre">
                Read Full Review →
              </Link>
              <button type="button" className="btn-next-random" onClick={pickRandomTool}>
                Roll Another Tool
              </button>
            </div>
          </div>
        </div>
      )}

      {filteredTools.length === 0 ? (
        <div className="no-results">
          <p>No tools matched your active filters.</p>
          <button type="button" className="btn btn-ochre" onClick={resetAll}>
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="tool-cards-grid">
          {filteredTools.map((tool) => {
            const stale = isStaleDate(tool.lastVerified, 45, referenceNowMs);
            return (
              <article key={tool.slug} className="tool-card">
                <div className="tool-card-top">
                  <div className="tool-card-identity">
                    <ToolLogo tool={tool} size="md" />
                    <div>
                      <h2 className="tool-card-name">
                        <Link href={`/tools/${tool.slug}`}>{tool.name}</Link>
                      </h2>
                      <p className="tool-card-vendor">{tool.vendor}</p>
                    </div>
                  </div>
                  <PricingBadge model={tool.pricing} />
                </div>

                <p className="tool-card-tagline">{tool.summary}</p>
                <p className="tool-card-best">
                  <strong>Best for:</strong> {tool.bestFor}
                </p>

                <div className="tool-card-pricing">
                  <span className="entry-price-tag">{formatEntryPrice(tool)}</span>
                  {tool.hasFreeTier && tool.freeTierNote ? (
                    <span className="free-note-line">{tool.freeTierNote}</span>
                  ) : null}
                </div>

                <div className="tool-card-footer">
                  <span className="verified-inline">
                    Verified <time dateTime={tool.lastVerified}>{formatDate(tool.lastVerified)}</time>
                    {stale ? <span className="stale-pill">Check price</span> : null}
                  </span>
                  <Link href={`/tools/${tool.slug}`} className="review-btn">
                    Review →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
