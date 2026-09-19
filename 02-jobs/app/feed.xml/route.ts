import { fetchLiveJobs } from "@/lib/jobs";
import { absUrl, site } from "@/lib/site";

export const revalidate = 300;

export async function GET() {
  const jobs = await fetchLiveJobs(30);
  const items = jobs
    .map(
      (job) => `    <item>
      <title>${escapeXml(`${job.title} at ${job.company}`)}</title>
      <link>${absUrl(`/job/${job.id}`)}</link>
      <guid>${absUrl(`/job/${job.id}`)}</guid>
      <pubDate>${new Date(job.postedAt).toUTCString()}</pubDate>
      <description>${escapeXml(job.excerpt)}</description>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(site.name)} live jobs</title>
    <link>${absUrl("/jobs")}</link>
    <description>${escapeXml(site.description)}</description>
    <language>en</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
