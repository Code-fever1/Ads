import { CONTACT_EMAIL, GA4_MEASUREMENT_ID } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "Plain-language privacy policy for Kiln: no user accounts, no personal data sold, and optional Google Analytics 4 disclosure.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main>
      <p className="section-label">Privacy</p>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3rem)", margin: "0 0 0.75rem" }}>
        Privacy policy
      </h1>
      <article className="prose">
        <p>
          Kiln is a static informational directory. We do not offer user accounts, logins, comment
          sections, or personal data collection forms, and we never sell or rent visitor data.
        </p>

        <h2>Analytics &amp; cookies</h2>
        <p>
          {GA4_MEASUREMENT_ID
            ? "Kiln uses Google Analytics 4 (GA4) to understand aggregate page traffic and which tool comparisons readers find useful. GA4 may set first-party measurement cookies in your browser."
            : "Kiln is configured to support Google Analytics 4 (GA4) for aggregate traffic measurement when enabled. No advertising networks, retargeting pixels, or user-tracking cookies are active on this site."}
        </p>

        <h2>Outbound links</h2>
        <p>
          When you click through to a tool vendor&rsquo;s official website, that vendor&rsquo;s own
          privacy policy applies. Network-wide privacy details are also published on{" "}
          <a href="https://toolfolio.page/privacy">toolfolio.page/privacy</a>.
        </p>

        <h2>Questions</h2>
        <p>
          Contact <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with any privacy
          questions.
        </p>
      </article>
    </main>
  );
}
