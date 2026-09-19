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
        emptyNote="No live matches in the current 100. The copy on this page is still the unique value; we will not pad with expired rows."
      />
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
