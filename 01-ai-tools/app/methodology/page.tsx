import type { Metadata } from "next";
import { getGuide } from "@/data/guides";

export const metadata: Metadata = {
  title: "Methodology",
  description: "How Kiln decides what to list.",
};

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
