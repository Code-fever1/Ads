import { getGuide } from "@/data/guides";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({
  title: "Affiliate Disclosure & Editorial Standards",
  description:
    "Plain-language affiliate and sponsorship disclosure for Kiln: commissions never change our verdicts, pricing checks, or skip-if notes.",
  path: "/disclosure",
});

export default function DisclosurePage() {
  const guide = getGuide("ads-and-affiliates");
  return (
    <main>
      <p className="section-label">Transparency</p>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3rem)", margin: "0 0 0.75rem" }}>
        Affiliate disclosure
      </h1>
      <article className="prose">
        {guide?.body.map((paragraph) => (
          <p key={paragraph.slice(0, 20)}>{paragraph}</p>
        ))}
        <p>
          Any outbound link carrying an affiliate relationship uses{" "}
          <code>rel=&quot;nofollow sponsored&quot;</code>. Tools without an active affiliate link
          use plain outbound links to the official vendor site.
        </p>
      </article>
    </main>
  );
}
