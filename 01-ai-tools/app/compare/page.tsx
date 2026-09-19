import Link from "next/link";
import { comparisons } from "@/data/comparisons";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "AI tool comparisons",
  description: "Side-by-side comparisons such as ChatGPT vs Claude and Cursor vs GitHub Copilot, with a pick-A and pick-B line.",
  path: "/compare",
});

export default function CompareIndex() {
  return (
    <main>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3rem)" }}>
        Compare
      </h1>
      <ul className="stack" style={{ marginTop: "1.5rem" }}>
        {comparisons.map((comparison) => (
          <li key={comparison.slug}>
            <Link href={`/compare/${comparison.slug}`}>{comparison.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
