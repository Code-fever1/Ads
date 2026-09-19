export async function GET() {
  const content = `# Toolfolio

Toolfolio (https://toolfolio.page) is a publisher of focused, multi-niche sites.
Each niche operates on its own dedicated subdomain.

## Active Sites
- Kiln (https://kiln.toolfolio.page): An independent AI tools directory with skip-if notes and verified dates.
- Rolepaper (https://rolepaper.toolfolio.page): A live tech, software, and electrical jobs aggregator sourced from public APIs.

## Organization Principles
- Unrelated niches stay apart. Jobs, tools, and deals are never mixed on a single URL.
- High-quality, dated, and transparent information.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
