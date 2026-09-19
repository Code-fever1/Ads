import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy",
  description: "Privacy policy for the Toolfolio publisher hub.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="prose">
      <h1>Privacy</h1>
      <p>
        Toolfolio.page is the publisher hub for Kiln and Rolepaper. We do not run user accounts on
        this domain. Pages may show Google ads. Google and its partners may use cookies and device
        identifiers to serve and measure those ads, including in the EEA, UK, and Switzerland after
        you choose a consent option.
      </p>
      <p>
        Use the consent banner to allow, refuse, or manage advertising partners. You can change that
        choice later from the privacy link in the banner or by clearing site data.
      </p>
      <p>
        Job applications and tool vendors are third parties. We do not receive your application or
        payment details. Questions: the contact on the AdSense / Google account for this publisher.
      </p>
    </main>
  );
}
