export const site = {
  name: "Rolepaper",
  domain: "rolepaper.toolfolio.page",
  description:
    "Live tech and electrical engineering listings from public job APIs. We are not the employer. Apply on the original posting.",
};

export function absUrl(path: string) {
  return `https://${site.domain}${path}`;
}
