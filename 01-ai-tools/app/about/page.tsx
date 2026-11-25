import Link from "next/link";
import { tools } from "@/data/tools";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({
  title: "About Kiln",
  description:
    "What Kiln is, who runs it, and our editorial policy: every price hand-checked, visible verification dates, and zero pay-for-ranking.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <p className="section-label">About the Directory</p>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3rem)", margin: "0 0 0.75rem" }}>
        About Kiln
      </h1>
      <p className="lede">
        Kiln is an independent, human-verified directory of {tools.length} AI tools at
        kiln.toolfolio.page, built and maintained by Alijah as part of the Toolfolio network.
      </p>

      <article className="prose" style={{ marginTop: "1.5rem" }}>
        <h2>Why Kiln exists</h2>
        <p>
          Most AI directories scrape thousands of landing pages, publish unverified AI summaries,
          and leave stale 2024 pricing on live pages. Kiln takes the opposite approach: a smaller,
          curated catalog where every tool has a checked price band, free-tier status, honest
          limitations, and a &ldquo;who should skip this&rdquo; warning.
        </p>

        <h2>Editorial policy</h2>
        <ul>
          <li>
            <strong>Hand-checked pricing:</strong> A human opens the vendor&rsquo;s official
            pricing page before a verification date is updated.
          </li>
          <li>
            <strong>Visible staleness warnings:</strong> Any listing whose verification date is
            more than 45 days old displays an amber reminder to check the vendor&rsquo;s site
            before paying.
          </li>
          <li>
            <strong>No pay-for-ranking:</strong> Vendors cannot buy higher placement or alter a
            skip-if warning. Future sponsored placements will always be labeled{" "}
            <em>Sponsored</em>.
          </li>
          <li>
            <strong>No cracked software or malware:</strong> We link strictly to official vendor
            pages and legitimate open-source repositories.
          </li>
        </ul>

        <p style={{ marginTop: "1.25rem" }}>
          Read our <Link href="/methodology">evaluation methodology</Link>, check our{" "}
          <Link href="/disclosure">affiliate disclosure</Link>, or{" "}
          <Link href="/contact">get in touch</Link>.
        </p>
      </article>
    </main>
  );
}
