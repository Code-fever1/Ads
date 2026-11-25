import Link from "next/link";
import { guides } from "@/data/guides";
import { estimateReadingTime } from "@/lib/format";
import { pageMeta } from "@/lib/seo";
import { formatDate } from "@/lib/site";

export const dynamic = "force-static";

export const metadata = pageMeta({
  title: "Guides & Field Notes on AI Tools",
  description:
    "Decision frameworks, pricing breakdowns, and free-tier guides for choosing AI tools without falling for marketing claims.",
  path: "/blog",
});

export default function BlogIndex() {
  return (
    <main>
      <p className="section-label">Editorial Guides</p>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3rem)", margin: "0 0 0.5rem" }}>
        Guides &amp; field notes ({guides.length})
      </h1>
      <p className="lede">
        Practical decision frameworks, pricing breakdowns, and editorial standards—written for
        working builders and operators.
      </p>
      <div className="other-guides-grid" style={{ marginTop: "1.75rem" }}>
        {guides.map((guide) => {
          const minutes = estimateReadingTime(guide);
          const displayDate = guide.updatedDate ?? guide.date;
          return (
            <Link key={guide.slug} href={`/blog/${guide.slug}`} className="guide-nav-card">
              <span className="guide-kw">
                {formatDate(displayDate)} · {minutes} min read
              </span>
              <span className="guide-title">{guide.title}</span>
              <span style={{ fontSize: "0.86rem", color: "var(--soot)", lineHeight: 1.45, marginBottom: "0.75rem" }}>
                {guide.summary}
              </span>
              <span className="guide-arrow">Read Guide →</span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
