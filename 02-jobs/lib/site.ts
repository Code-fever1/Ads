export const site = {
  name: "Rolepaper",
  domain: "rolepaper.toolfolio.page",
  description:
    "Live software and machine-learning jobs from public APIs. Electrical and embedded titles appear when the feeds list them. Rolepaper is not the employer — apply on the original posting.",
};

export function absUrl(path: string) {
  return `https://${site.domain}${path}`;
}
