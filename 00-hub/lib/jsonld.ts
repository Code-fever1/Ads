export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Toolfolio",
    url: "https://toolfolio.page",
    logo: "https://toolfolio.page/mark.png",
    description: "A small house of focused sites: Kiln for AI tools, Rolepaper for tech jobs. Unrelated niches stay apart.",
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Toolfolio",
    url: "https://toolfolio.page",
    description: "A small house of focused sites: Kiln for AI tools, Rolepaper for tech jobs.",
  };
}
