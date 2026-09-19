import type { Metadata } from "next";
import { getGuide } from "@/data/guides";

export const metadata: Metadata = {
  title: "Disclosure",
  description: "How Kiln will use ads and affiliates.",
};

export default function DisclosurePage() {
  const guide = getGuide("ads-and-affiliates");
  return (
    <main>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3rem)" }}>
        Ads and affiliates
      </h1>
      <article className="prose">
        {guide?.body.map((paragraph) => (
          <p key={paragraph.slice(0, 20)}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
}
