import Link from "next/link";
import { guides } from "@/data/guides";
import { pageMeta } from "@/lib/seo";
import { formatDate } from "@/lib/site";

export const metadata = pageMeta({
  title: "Notes on AI tools",
  description: "How Kiln evaluates tools, pricing traps in 2026, and when not to use an AI coding agent.",
  path: "/blog",
});

export default function BlogIndex() {
  return (
    <main>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3rem)" }}>Notes</h1>
      <p className="lede">
        Experience-led pages, not rewritten vendor blogs. This is also where AdSense belongs later:
        guides, not outbound listing density.
      </p>
      <ul className="stack" style={{ marginTop: "1.5rem" }}>
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link href={`/blog/${guide.slug}`}>{guide.title}</Link>
            <div>
              {formatDate(guide.date)} · {guide.summary}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
