import Link from "next/link";
import { rankings } from "@/data/rankings";
import { pageMeta } from "@/lib/seo";
import { formatDate } from "@/lib/site";

export const dynamic = "force-static";

export const metadata = pageMeta({
  title: "Best AI Tools by Job (2026) — Tested & Ranked",
  description:
    "Ranked shortlists for AI coding tools, developers, ChatGPT alternatives, image generators, writing, video, agents, and free AI tools.",
  path: "/best",
});

export default function BestIndex() {
  return (
    <main>
      <p className="section-label">Editorial Shortlists</p>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3rem)", margin: "0 0 0.5rem" }}>
        Best-of guides ({rankings.length})
      </h1>
      <p className="lede">
        Curated rankings organized by the actual job you need done—with transparent criteria, entry
        pricing, and verified dates.
      </p>
      <div className="other-guides-grid" style={{ marginTop: "1.75rem" }}>
        {rankings.map((ranking) => (
          <Link key={ranking.slug} href={`/best/${ranking.slug}`} className="guide-nav-card">
            <span className="guide-kw">
              {ranking.toolSlugs.length} tools · Updated {formatDate(ranking.updatedDate)}
            </span>
            <span className="guide-title">{ranking.title}</span>
            <span style={{ fontSize: "0.86rem", color: "var(--soot)", lineHeight: 1.45, marginBottom: "0.75rem" }}>
              {ranking.intro.slice(0, 120)}…
            </span>
            <span className="guide-arrow">Open Ranking →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
