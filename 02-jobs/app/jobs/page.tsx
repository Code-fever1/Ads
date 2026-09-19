import type { Metadata } from "next";
import { JobsBoard } from "@/components/JobsBoard";
import { fetchLiveJobs } from "@/lib/jobs";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Live 100 jobs",
  description:
    "Up to 100 current software and engineering listings from Remote OK, Himalayas, and Arbeitnow.",
};

export default async function JobsPage() {
  const jobs = await fetchLiveJobs(100);
  return (
    <main>
      <h1>Live 100</h1>
      <p className="essay">
        Newest first, tech and electrical filters applied, older than 30 days removed. Click a title
        for JobPosting details. Click Apply to leave Rolepaper. Remote OK listings include a follow
        link to Remote OK as their API terms require.
      </p>
      <JobsBoard initial={jobs} />
    </main>
  );
}
