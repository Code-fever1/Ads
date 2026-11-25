import { CONTACT_EMAIL } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({
  title: "Submit an AI Tool",
  description:
    "How to request a listing or price correction on Kiln. Manual editorial review only — no paid queue-jumps.",
  path: "/submit",
});

export default function SubmitPage() {
  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Kiln Tool Submission / Price Correction",
  )}`;

  return (
    <main>
      <p className="section-label">Submissions &amp; Corrections</p>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3rem)", margin: "0 0 0.5rem" }}>
        Submit a tool
      </h1>
      <p className="lede">
        Built a legitimate AI product or spotted a price change we missed? Every listing is
        reviewed by hand before publishing. We do not accept paid queue-jumps, cracked software, or
        unverified wrappers.
      </p>

      <div className="prose" style={{ marginTop: "1.5rem" }}>
        <h2>What to include in your email</h2>
        <ul>
          <li>Tool name, vendor name, and official product URL</li>
          <li>Link to the public pricing page (and free-tier limits, if any)</li>
          <li>One sentence explaining what the tool is best for</li>
          <li>One sentence explaining who should skip it</li>
        </ul>

        <p style={{ marginTop: "1.25rem" }}>
          <a href={mailtoHref} className="btn btn-ochre">
            Email submission to {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </main>
  );
}
