import { fetchLiveJobs } from "@/lib/jobs";

export const revalidate = 60;

export async function GET() {
  const jobs = await fetchLiveJobs(100);
  return Response.json({
    fetchedAt: new Date().toISOString(),
    count: jobs.length,
    jobs,
    note: "Served by Rolepaper from public APIs. Not a scrape of Indeed or LinkedIn.",
  });
}
