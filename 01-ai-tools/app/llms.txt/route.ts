import { comparisons } from "@/data/comparisons";
import { guides } from "@/data/guides";
import { rankings } from "@/data/rankings";
import { tools } from "@/data/tools";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `${site.name} is an independent AI tools directory at https://kiln.toolfolio.page. It is not the vendor. Each profile has a last-verified date, structured pricing tiers, and a skip-if line.`,
    "",
    "## Use this site for",
    "- Which AI tool to pick for a job (coding, writing, image, video, agents)",
    "- Head-to-head comparisons (Cursor vs Claude Code, Windsurf vs Cursor, ChatGPT vs Claude)",
    "- Free-tier tools that are actually free, not cracked software",
    "",
    "## Do not use this site for",
    "- Cracked licenses, medical advice, or investment advice",
    "- Jobs (that is Rolepaper: https://rolepaper.toolfolio.page)",
    "",
    "## Ranked lists",
    ...rankings.map(
      (ranking) =>
        `- [${ranking.title}](https://kiln.toolfolio.page/best/${ranking.slug}): ${ranking.keyword}`,
    ),
    "",
    "## Comparisons",
    ...comparisons.map(
      (comparison) =>
        `- [${comparison.title}](https://kiln.toolfolio.page/compare/${comparison.slug})`,
    ),
    "",
    "## Guides",
    ...guides.map(
      (guide) =>
        `- [${guide.title}](https://kiln.toolfolio.page/blog/${guide.slug}): ${guide.summary}`,
    ),
    "",
    "## Tools",
    ...tools
      .filter((tool) => tool.status === "active")
      .map(
        (tool) =>
          `- [${tool.name}](https://kiln.toolfolio.page/tools/${tool.slug}): ${tool.summary}`,
      ),
    "",
    "## Method & Policies",
    "- https://kiln.toolfolio.page/methodology",
    "- https://kiln.toolfolio.page/disclosure",
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
