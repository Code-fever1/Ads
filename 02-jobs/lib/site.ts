export const site = {
  name: "Rolepaper",
  domain: "rolepaper.toolfolio.page",
  description:
    "Live software, machine learning, and electrical engineering jobs from public APIs. Rolepaper is not the employer — apply on the original posting.",
};

export function absUrl(path: string) {
  return `https://${site.domain}${path}`;
}
