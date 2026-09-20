import Link from "next/link";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/chrome";
import { careerPages } from "@/data/career";
import { hubs } from "@/data/hubs";
import { fetchLiveJobs } from "@/lib/jobs";
import { itemListJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { JobsBoard } from "@/components/JobsBoard";

export const revalidate = 300;

export const metadata = pageMeta({
  title: "Live software jobs",
  description: site.description,
  path: "/",
  absoluteTitle: "Rolepaper · live software jobs",
});

export default async function Home() {
  const preview = (await fetchLiveJobs(100)).slice(0, 8);
  const roles = hubs.filter((hub) => hub.kind === "role");
  const geos = hubs.filter((hub) => hub.kind === "geo");

  return (
    <main>
      <JsonLd
        data={itemListJsonLd(
          "Latest jobs on Rolepaper",
          "/",
          preview.map((job) => ({
            name: `${job.title} at ${job.company}`,
            path: `/job/${job.id}`,
          })),
        )}
      />
      <p className="flag">
        Edition desk · software is the core, electrical engineering is a supporting pillar, career
        pages carry the long essays. Unrelated niches stay on other domains.
      </p>
      <div className="columns">
        <div>
          <h1>Today’s classifieds, fetched live.</h1>
          <p className="essay">
            Rolepaper is a third-party job aggregator at rolepaper.toolfolio.page. We reprint software
            and machine-learning listings that already exist on Remote OK, Himalayas, and Arbeitnow.
            Electrical and embedded titles appear when those APIs actually list them — we do not invent
            a full electrical desk. We add dates, a 30-day expiry, and unique hub copy. We do not run
            your application and we do not scrape LinkedIn or Indeed. Refreshing the live table asks
            our server, which asks those public APIs.
          </p>
          <p>
            <Link className="stamp" href="/jobs">
              Open the live 100
            </Link>
          </p>
        </div>
        <aside className="index">
          <strong>Role desks</strong>
          {roles.slice(0, 12).map((hub) => (
            <Link key={hub.slug} href={hub.path}>
              {hub.title}
            </Link>
          ))}
          <strong style={{ display: "block", marginTop: "1rem" }}>Places</strong>
          {geos.map((hub) => (
            <Link key={hub.slug} href={hub.path}>
              {hub.title}
            </Link>
          ))}
          <strong style={{ display: "block", marginTop: "1rem" }}>Career</strong>
          {careerPages.map((page) => (
            <Link key={page.slug} href={`/career/${page.slug}`}>
              {page.title}
            </Link>
          ))}
        </aside>
      </div>
      <h2>Latest from the wires</h2>
      <JobsBoard initial={preview} />
      <Faq
        items={[
          {
            question: "What is Rolepaper?",
            answer:
              "Rolepaper is an independent job aggregator. We are not the employer. Every listing has a company name, a posted date, and an apply URL that leaves this site.",
          },
          {
            question: "Are these Indeed or LinkedIn jobs?",
            answer:
              "No. Live rows come from public APIs: Remote OK, Himalayas, and Arbeitnow as a fallback. We do not scrape Indeed, LinkedIn, or Glassdoor.",
          },
          {
            question: "How do I apply?",
            answer:
              "Open the listing, then use Apply on the original posting. Rolepaper does not host applications, CVs, or accounts.",
          },
        ]}
      />
    </main>
  );
}
