import { CONTACT_EMAIL } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({
  title: "Contact Kiln",
  description:
    "How to reach the Kiln editorial team for price corrections, broken links, or listing inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <p className="section-label">Editorial Desk</p>
      <h1 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,4vw,3rem)", margin: "0 0 0.75rem" }}>
        Contact
      </h1>
      <p className="lede">
        Spotted a changed price, broken vendor link, or factual error? Send us an email directly.
        We do not run contact-form trackers or third-party ticketing widgets.
      </p>

      <div className="prose" style={{ marginTop: "1.5rem" }}>
        <p>
          Email:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} style={{ fontWeight: 700 }}>
            {CONTACT_EMAIL}
          </a>
        </p>
        <p>
          If you are requesting a new tool listing, please include the official URL, public pricing
          link, and free-tier rules (see <a href="/submit">/submit</a>).
        </p>
      </div>
    </main>
  );
}
