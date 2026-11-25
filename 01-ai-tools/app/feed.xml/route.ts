import { guides } from "@/data/guides";
import { tools } from "@/data/tools";
import { absUrl, site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const feedEntries = [
    ...guides.map((guide) => ({
      title: `Guide: ${guide.title}`,
      link: absUrl(`/blog/${guide.slug}`),
      date: guide.updatedDate ?? guide.date,
      description: guide.summary,
    })),
    ...tools.map((tool) => ({
      title: `${tool.name} (${tool.vendor}) — ${tool.priceBand}`,
      link: absUrl(`/tools/${tool.slug}`),
      date: tool.lastVerified,
      description: `${tool.summary} Best for: ${tool.bestFor}. Skip if: ${tool.skipIf}`,
    })),
  ]
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title))
    .slice(0, 30);

  const items = feedEntries
    .map(
      (entry) => `    <item>
      <title>${escapeXml(entry.title)}</title>
      <link>${entry.link}</link>
      <guid>${entry.link}</guid>
      <pubDate>${new Date(`${entry.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeXml(entry.description)}</description>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(site.name)} — Verified AI Tools &amp; Guides</title>
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
