import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ads disclosure",
};

export default function DisclosurePage() {
  return (
    <main className="prose">
      <h1>Ads</h1>
      <p>
        This hub and the sites under toolfolio.page may show Google AdSense. We are not the vendor of
        the AI tools on Kiln and not the employer on Rolepaper. Affiliate links, if added later, will
        be labeled.
      </p>
      <p>
        We will not sell cracked software, fake coupons, or guaranteed jobs. Those verticals stay
        off these domains.
      </p>
    </main>
  );
}
