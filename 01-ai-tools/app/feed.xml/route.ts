import { guides } from "@/data/guides";
import { absUrl, site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const items = guides
    .map(
      (guide) => `    <item>
      <title>${escapeXml(guide.title)}</title>
      <link>${absUrl(`/blog/${guide.slug}`)}</link>
      <guid>${absUrl(`/blog/${guide.slug}`)}</guid>
      <pubDate>${new Date(`${guide.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeXml(guide.summary)}</description>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(site.name)} notes</title>
    <link>${absUrl("/")}</link>
    <description>${escapeXml(site.description)}</description>
    <language>en</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
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
