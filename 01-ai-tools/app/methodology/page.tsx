import { getGuide } from "@/data/guides";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "How Kiln evaluates AI tools",
  description: "We only list products with a public website, a last-verified date, and a skip-if line. Cracked software is out.",
  path: "/methodology",
});

export default function MethodologyPage() {
  const guide = getGuide("how-we-evaluate");
  return (
    <main>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3rem)" }}>
        Methodology
      </h1>
      <article className="prose">
        {guide?.body.map((paragraph) => (
          <p key={paragraph.slice(0, 20)}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
}
