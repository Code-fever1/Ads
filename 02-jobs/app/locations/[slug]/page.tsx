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
        emptyNote="The public APIs rarely mention this city. That gap is why a VPS plus company ATS feeds is Option 2, not a LinkedIn scrape."
      />
      <Faq
        items={[
          {
            question: `Can I apply to ${hub.title} on Rolepaper?`,
            answer:
              "No. Rolepaper is not the employer and does not geo-target ads as a local services business. Open the original posting for work-authorization rules.",
          },
          {
            question: "Why is this table sometimes empty?",
            answer:
              "Remote OK and Himalayas under-serve some cities. We will not invent expired rows to fill a doorway page.",
          },
        ]}
      />
    </main>
  );
}
