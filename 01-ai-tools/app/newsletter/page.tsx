import Link from "next/link";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { NEWSLETTER_URL } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({
  title: "Kiln Weekly Newsletter & RSS Feed",
  description:
    "Follow newly verified AI tools, pricing updates, and side-by-side comparisons via Kiln's weekly digest or RSS feed.",
  path: "/newsletter",
});

export default function NewsletterPage() {
  return (
    <main>
      <p className="section-label">Updates</p>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3rem)", margin: "0 0 0.75rem" }}>
        Kiln newsletter &amp; RSS feed
      </h1>
      <p className="lede">
        One concise weekly summary: 3 newly verified AI tools, price changes worth knowing, and 1
        head-to-head comparison. Zero fluff, zero daily spam.
      </p>

      <div className="prose" style={{ marginTop: "1.5rem" }}>
        {NEWSLETTER_URL ? (
          <>
            <h2>Subscribe by email</h2>
            <NewsletterSignup />
          </>
        ) : (
          <>
            <h2>Follow via RSS / Atom reader</h2>
            <p>
              Email subscriptions open once our weekly digest list is connected. In the meantime,
              you can follow every newly verified tool and guide directly through Kiln&rsquo;s
              static RSS feed:
            </p>
            <p>
              <a href="/feed.xml" className="btn btn-ochre">
                Open /feed.xml →
              </a>
            </p>
          </>
        )}

        <p style={{ marginTop: "1.25rem" }}>
          Or browse the <Link href="/blog">latest guides</Link> and{" "}
          <Link href="/compare">head-to-head comparisons</Link> directly on the site.
        </p>
      </div>
    </main>
  );
}
