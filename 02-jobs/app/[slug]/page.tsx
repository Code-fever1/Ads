import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/chrome";
import { Crumbs, Faq } from "@/components/faq";
import { JobsBoard } from "@/components/JobsBoard";
import { careerPages } from "@/data/career";
import { hubs } from "@/data/hubs";
import { fetchLiveJobs, matchesHub } from "@/lib/jobs";
import { breadcrumbJsonLd, hubListJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 300;

const roleHubs = hubs.filter((hub) => !hub.path.startsWith("/locations/"));

export function generateStaticParams() {
  return roleHubs.map((hub) => ({ slug: hub.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hub = roleHubs.find((item) => item.slug === slug);
  if (!hub) return { title: "Not found" };
  return pageMeta({
    title: `${hub.title} — live listings`,
    description: hub.intro.slice(0, 160),
    path: hub.path,
  });
}

export default async function HubPage({ params }: Props) {
  const { slug } = await params;
  const hub = roleHubs.find((item) => item.slug === slug);
  if (!hub) notFound();
  const jobs = (await fetchLiveJobs(100)).filter((job) => matchesHub(job, hub.keywords));

  // Sister role hubs for cross-discovery
  const sisterHubs = roleHubs.filter((h) => h.slug !== hub.slug).slice(0, 8);
  const featuredEssays = careerPages.slice(0, 3);

  return (
    <main>
      <JsonLd data={hubListJsonLd(hub, jobs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Live 100", path: "/jobs" },
          { name: hub.title, path: hub.path },
        ])}
      />
      <Crumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Live 100", href: "/jobs" },
          { name: hub.title, href: hub.path },
        ]}
      />
      <p className="flag">{hub.headline}</p>
      <h1>{hub.title}</h1>
      <article className="essay">
        <p>{hub.intro}</p>
      </article>

      <JobsBoard
        initial={jobs}
        keywords={hub.keywords}
        emptyNote="No active postings match this filter in the current feed window. Check back during daily updates or explore related categories below."
      />

      {/* Featured Career Desk Callout */}
      <section className="hub-career-callout">
        <div className="callout-header">
          <span className="stamp small">From the Career Desk</span>
          <h3>Practical Advice for {hub.title}</h3>
        </div>
        <p className="callout-desc">
          Applying to positions directly from this board? Review our no-fluff guides on preparing CVs,
          handling technical interviews, and understanding compensation bands.
        </p>
        <div className="career-cards-row">
          {featuredEssays.map((essay) => (
            <Link key={essay.slug} href={`/career/${essay.slug}`} className="career-mini-card">
              <span className="mini-card-title">{essay.title}</span>
              <span className="mini-card-summary">{essay.summary}</span>
              <span className="mini-card-read">Read Essay →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Cross-Discovery: Related Desks */}
      <section className="related-desks-section">
        <h3>Explore Other Role Desks</h3>
        <div className="related-desks-pills">
          <Link href="/jobs" className="r-desk-pill all-pill">
            ← Live 100 Index
          </Link>
          {sisterHubs.map((sister) => (
            <Link key={sister.slug} href={sister.path} className="r-desk-pill">
              {sister.title}
            </Link>
          ))}
        </div>
      </section>

      <Faq
        items={[
          {
            question: `Does Rolepaper hire for ${hub.title.toLowerCase()}?`,
            answer:
              "No. Rolepaper is not the employer. These are third-party listings from public job APIs. Apply on the original posting.",
          },
          {
            question: "How current are these jobs?",
            answer:
              "The table is rebuilt from Remote OK, Himalayas, and Arbeitnow. Rows older than 30 days are dropped. An empty table means the feeds have no match today.",
          },
        ]}
      />
    </main>
  );
}
