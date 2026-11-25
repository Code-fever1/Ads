import { getGuide } from "@/data/guides";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({
  title: "How Kiln Evaluates AI Tools",
  description:
    "We only list products with a public website, hand-checked pricing, a last-verified date, and a skip-if line.",
  path: "/methodology",
});

export default function MethodologyPage() {
  const guide = getGuide("how-we-evaluate");
  return (
    <main>
      <p className="section-label">Editorial Method</p>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3rem)", margin: "0 0 0.75rem" }}>
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
