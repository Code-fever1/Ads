import Link from "next/link";
import { careerPages } from "@/data/career";
import { hubs } from "@/data/hubs";
import { fetchLiveJobs } from "@/lib/jobs";
import { JobsBoard } from "@/components/JobsBoard";

export const revalidate = 300;

export default async function Home() {
  const preview = (await fetchLiveJobs(100)).slice(0, 8);
  const roles = hubs.filter((hub) => hub.kind === "role");
  const geos = hubs.filter((hub) => hub.kind === "geo");

  return (
    <main>
      <p className="flag">
        Edition desk · software is the core, electrical engineering is a supporting pillar, career
        pages carry the long essays. Unrelated niches stay on other domains.
      </p>
      <div className="columns">
        <div>
          <h1>Today’s classifieds, fetched live.</h1>
          <p className="essay">
            Rolepaper reprints jobs that already exist on Remote OK, Himalayas, and Arbeitnow. We add
            dates, expiry, and unique hub copy. We do not run your application and we do not scrape
            LinkedIn from your laptop. Refreshing the live table asks our server, which asks those
            public APIs.
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
    </main>
  );
}
