import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({
  title: "Terms of Use",
  description:
    "Terms of use for Kiln: informational AI tool directory, pricing verification guidance, and external vendor responsibility.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main>
      <p className="section-label">Terms</p>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3rem)", margin: "0 0 0.75rem" }}>
        Terms of use
      </h1>
      <article className="prose">
        <p>
          Kiln (<code>kiln.toolfolio.page</code>) is an independent editorial directory provided for
          informational purposes only. We do not sell, operate, or warrant any third-party AI
          software listed on this site.
        </p>
        <h2>Verify prices before purchasing</h2>
        <p>
          AI software vendors update plans, credit limits, and commercial licensing terms
          frequently. Always confirm current pricing, free-tier quotas, and data-retention terms on
          the official vendor website before subscribing or entering payment details.
        </p>
        <h2>No professional advice</h2>
        <p>
          Content on Kiln does not constitute legal, security, medical, or financial advice.
        </p>
      </article>
    </main>
  );
}
