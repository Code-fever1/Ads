import { careerPages } from "@/data/career";
import { hubs } from "@/data/hubs";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const roles = hubs.filter((hub) => hub.kind === "role" || hub.kind === "filter");
  const body = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "Rolepaper is a third-party job aggregator at https://rolepaper.toolfolio.page. It is not the employer. Listings are fetched from Remote OK, Himalayas, and Arbeitnow, dated, and dropped after 30 days. Apply on the original posting.",
    "",
    "## Use this site for",
    "- Live software engineer, frontend, backend, data, ML, and electrical engineering jobs",
    "- Remote and entry-level filters on the current 100",
    "- Career notes on CVs, interviews, and reading a listed salary",
    "",
    "## Do not use this site for",
    "- Indeed or LinkedIn scrapes (we do not scrape those sites)",
    "- Applying on Rolepaper itself (we do not run applications)",
    "- AI tools (that is Kiln: https://kiln.toolfolio.page)",
    "",
    "## Role hubs",
    ...roles.map((hub) => `- [${hub.title}](https://rolepaper.toolfolio.page${hub.path})`),
    "",
    "## Career desk",
    ...careerPages.map((page) => `- [${page.title}](https://rolepaper.toolfolio.page/career/${page.slug}): ${page.summary}`),
    "",
    "## Live board",
    "- https://rolepaper.toolfolio.page/jobs",
    "- Sources: https://rolepaper.toolfolio.page/sources",
    "- Parent site: https://toolfolio.page",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
