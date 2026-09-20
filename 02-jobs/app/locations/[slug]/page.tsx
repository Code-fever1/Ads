import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/chrome";
import { Crumbs, Faq } from "@/components/faq";
import { JobsBoard } from "@/components/JobsBoard";
import { hubs } from "@/data/hubs";
import { fetchLiveJobs, matchesHub } from "@/lib/jobs";
import { breadcrumbJsonLd, hubListJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 300;

const geoHubs = hubs.filter((hub) => hub.path.startsWith("/locations/"));

export function generateStaticParams() {
  return geoHubs.map((hub) => ({ slug: hub.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hub = geoHubs.find((item) => item.slug === slug);
  if (!hub) return { title: "Not found" };
  return pageMeta({
    title: `${hub.title} — live listings`,
    description: hub.intro.slice(0, 160),
    path: hub.path,
  });
}

export default async function GeoPage({ params }: Props) {
  const { slug } = await params;
  const hub = geoHubs.find((item) => item.slug === slug);
  if (!hub) notFound();
  const jobs = (await fetchLiveJobs(100)).filter((job) => matchesHub(job, hub.keywords));

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
        emptyNote="No open positions currently match this specific municipal filter in our live feed. Explore global remote roles or check back during the next feed cycle."
      />
      <Faq
        items={[
          {
            question: `Can I apply to ${hub.title} on Rolepaper?`,
            answer:
              "No. Rolepaper indexes direct postings from hiring teams and global platforms. All applications must be submitted directly to the employer or ATS link provided on each listing.",
          },
          {
            question: "Why are listings for some locations limited?",
            answer:
              "Many tech employers list remote openings with broad regional eligibility rather than tagging specific municipal names. We only display active, verified openings and never pad pages with outdated or fictitious roles.",
          },
        ]}
      />
    </main>
  );
}
