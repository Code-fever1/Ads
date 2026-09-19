import { categories } from "@/data/categories";
import { tools } from "@/data/tools";
import { ToolExplorer } from "@/components/ToolExplorer";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "All AI tools · Interactive Directory",
  description: `Every AI tool currently on the Kiln bench (${tools.length} listings), with interactive live filtering, last-verified dates, and skip-if notes.`,
  path: "/tools",
});

export default function ToolsIndex() {
  return (
    <main>
      <div className="hero" style={{ display: "block", paddingBottom: "1.25rem" }}>
        <p className="section-label" style={{ marginTop: 0 }}>
          Interactive Catalog
        </p>
        <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3.2rem)", margin: "0 0 0.5rem" }}>
          Full AI tools bench
        </h1>
        <p className="lede" style={{ marginTop: 0 }}>
          {tools.length} active listings. Filter dynamically by workflow, budget, or vendor name.
          Open any profile for unvarnished skip-if criteria, verified pricing, and direct alternatives.
        </p>
      </div>

      <ToolExplorer initialTools={tools} availableCategories={categories} />
    </main>
  );
}
