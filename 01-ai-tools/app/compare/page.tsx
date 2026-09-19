import type { Metadata } from "next";
import Link from "next/link";
import { comparisons } from "@/data/comparisons";

export const metadata: Metadata = {
  title: "Compare",
  description: "Side-by-side AI tool comparisons with a pick-A and pick-B line.",
};

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
