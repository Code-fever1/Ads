import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";
import { formatDate } from "@/lib/site";

export const metadata: Metadata = {
  title: "All tools",
  description: "Every AI tool currently on the Kiln bench, with last-verified dates.",
};

export default function ToolsIndex() {
  return (
    <main>
      <h1 className="hero" style={{ display: "block", paddingBottom: "1rem" }}>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3.2rem)" }}>
          Full catalog
        </span>
      </h1>
      <p className="lede">
        {tools.length} active listings. Sorted A–Z. Open a profile for skip-if notes and alternatives.
      </p>
      <table className="catalog">
        <thead>
          <tr>
            <th>#</th>
            <th>Tool</th>
            <th>Categories</th>
            <th>Pricing</th>
            <th>Verified</th>
          </tr>
        </thead>
        <tbody>
          {[...tools]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((tool, index) => (
              <tr key={tool.slug}>
                <td className="num">{String(index + 1).padStart(2, "0")}</td>
                <td>
                  <Link href={`/tools/${tool.slug}`}>{tool.name}</Link>
                </td>
                <td>{tool.categories.join(", ")}</td>
                <td>{tool.pricing}</td>
                <td>{formatDate(tool.lastVerified)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
}
