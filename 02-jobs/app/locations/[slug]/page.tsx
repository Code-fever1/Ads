import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JobsBoard } from "@/components/JobsBoard";
import { hubs } from "@/data/hubs";
import { fetchLiveJobs, matchesHub } from "@/lib/jobs";

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
  return { title: hub.title, description: hub.intro.slice(0, 155) };
}

export default async function GeoPage({ params }: Props) {
  const { slug } = await params;
  const hub = geoHubs.find((item) => item.slug === slug);
  if (!hub) notFound();
  const jobs = (await fetchLiveJobs(100)).filter((job) => matchesHub(job, hub.keywords));

  return (
    <main>
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
    </main>
  );
}
