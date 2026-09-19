import Link from "next/link";
import { rankings } from "@/data/rankings";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Best AI tools by job",
  description: "Ranked AI tool shortlists for coding, writing, image, video, agents, and students — with methods and last-verified dates.",
  path: "/best",
});

export default function BestIndex() {
  return (
    <main>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3rem)" }}>Best of</h1>
      <p className="lede">
        Shortlists for jobs people search, not a dump of every logo in a category. Each page states
        criteria.
      </p>
      <ul className="stack" style={{ marginTop: "1.5rem" }}>
        {rankings.map((ranking) => (
          <li key={ranking.slug}>
            <Link href={`/best/${ranking.slug}`}>{ranking.title}</Link>
            <div>Keyword: {ranking.keyword}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
