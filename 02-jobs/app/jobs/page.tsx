import { JsonLd } from "@/components/chrome";
import { Faq } from "@/components/faq";
import { JobsBoard } from "@/components/JobsBoard";
import { fetchLiveJobs } from "@/lib/jobs";
import { itemListJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

export const revalidate = 300;

export const metadata = pageMeta({
  title: "Live 100 software and engineering jobs",
  description:
    "Up to 100 current software and engineering listings from Remote OK, Himalayas, and Arbeitnow. Rolepaper is not the employer.",
  path: "/jobs",
});

export default async function JobsPage() {
  const jobs = await fetchLiveJobs(100);
  return (
    <main>
      <JsonLd
        data={itemListJsonLd(
          "Live 100 jobs",
          "/jobs",
          jobs.map((job) => ({
            name: `${job.title} at ${job.company}`,
            path: `/job/${job.id}`,
          })),
        )}
      />
      <h1>Live 100 software and engineering jobs</h1>
      <p className="essay">
        Newest first, software and ML filters applied, older than 30 days removed. Click a title
        for JobPosting details. Click Apply to leave Rolepaper. Remote OK listings include a follow
        link to Remote OK as their API terms require.
      </p>
      <JobsBoard initial={jobs} />
      <Faq
        items={[
          {
            question: "Where do these jobs come from?",
            answer:
              "Public APIs: Remote OK and Himalayas first, Arbeitnow if we still need rows. We do not scrape Indeed or LinkedIn.",
          },
          {
            question: "Can I apply on Rolepaper?",
            answer: "No. Rolepaper does not host applications. Use Apply on the original posting.",
          },
        ]}
      />
    </main>
  );
}
