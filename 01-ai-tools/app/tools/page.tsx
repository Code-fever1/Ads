import { categories } from "@/data/categories";
import { tools } from "@/data/tools";
import { ToolExplorer } from "@/components/ToolExplorer";
import { BUILD_NOW_MS } from "@/lib/format";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({
  title: "All AI Tools — Verified Pricing & Filterable Bench",
  description: `Every AI tool on Kiln (${tools.length} verified listings). Filter by category, pricing model, free tier availability, or workflow task.`,
  path: "/tools",
});

export default function ToolsIndex() {
  return (
    <main>
      <div className="hero" style={{ display: "block", paddingBottom: "1.25rem" }}>
        <p className="section-label" style={{ marginTop: 0 }}>
          Verified Catalog
        </p>
        <h1
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(2rem,4vw,3.2rem)",
            margin: "0 0 0.5rem",
          }}
        >
          All AI tools ({tools.length})
        </h1>
        <p className="lede" style={{ marginTop: 0 }}>
          Filter by category, pricing model, free tier, or workflow task. Open any tool profile for
          verified tier breakdowns, honest limitations, and skip-if criteria.
        </p>
      </div>

      <ToolExplorer
        initialTools={tools}
        availableCategories={categories}
        referenceNowMs={BUILD_NOW_MS}
      />
    </main>
  );
}
