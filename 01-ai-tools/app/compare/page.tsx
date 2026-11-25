import Link from "next/link";
import { comparisons } from "@/data/comparisons";
import { pageMeta } from "@/lib/seo";
import { formatDate } from "@/lib/site";

export const dynamic = "force-static";

export const metadata = pageMeta({
  title: "AI Tool Comparisons (2026) — Head-to-Head Verdicts",
  description:
    "Side-by-side comparisons including Cursor vs Claude Code, Cursor vs Windsurf, Lovable vs Bolt.new, and ChatGPT vs Claude with clear use-case verdicts.",
  path: "/compare",
});

export default function CompareIndex() {
  return (
    <main>
      <p className="section-label">Side-by-Side Analysis</p>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3rem)", margin: "0 0 0.5rem" }}>
        AI tool comparisons ({comparisons.length})
      </h1>
      <p className="lede">
        Every comparison puts the verdict first, backs it with verified pricing rows, and tells you
        which tool fits which job.
      </p>
      <div className="other-comps-grid" style={{ marginTop: "1.75rem" }}>
        {comparisons.map((comparison) => (
          <Link
            key={comparison.slug}
            href={`/compare/${comparison.slug}`}
            className="comp-nav-card"
          >
            <span className="comp-nav-vs">
              {comparison.tools.length}-Way · Updated {formatDate(comparison.updatedDate)}
            </span>
            <span className="comp-nav-title">{comparison.title}</span>
            <span style={{ fontSize: "0.86rem", color: "var(--soot)", lineHeight: 1.45, marginBottom: "0.75rem" }}>
              {comparison.verdict}
            </span>
            <span className="comp-nav-action">Read Comparison →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
