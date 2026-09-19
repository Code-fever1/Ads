import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JobsBoard } from "@/components/JobsBoard";
import { hubs } from "@/data/hubs";
import { fetchLiveJobs, matchesHub } from "@/lib/jobs";

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
  return { title: hub.title, description: hub.intro.slice(0, 155) };
}

export default async function HubPage({ params }: Props) {
  const { slug } = await params;
  const hub = roleHubs.find((item) => item.slug === slug);
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
        emptyNote="No live matches in the current 100. The copy on this page is still the unique value; we will not pad with expired rows."
      />
    </main>
  );
}
