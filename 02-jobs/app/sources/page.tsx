import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Job sources",
  description: "Where Rolepaper’s live jobs come from, and why we do not scrape LinkedIn or Indeed.",
  path: "/sources",
});

export default function SourcesPage() {
  return (
    <main>
      <h1>Sources</h1>
      <article className="essay">
        <p>
          Live listings on Rolepaper are fetched server-side from verified developer APIs: Remote OK (
          <a href="https://remoteok.com" rel="noopener noreferrer" target="_blank">
            remoteok.com
          </a>
          ) and Himalayas. Arbeitnow is integrated as a secondary feed to provide comprehensive coverage
          across European and global distributed engineering teams. Every listing displayed links directly
          to the original source and application page.
        </p>
        <p>
          We do not scrape consumer mega-boards like LinkedIn or Indeed. Those platforms use aggressive
          anti-bot measures and fill search results with recycled, outdated recruiter postings. We believe
          jobseekers deserve fast, clean pages with verified direct employer links.
        </p>
        <p>
          To expand engineering coverage for regional tech talent across Pakistan, the UAE, and Saudi
          Arabia, we also index public Applicant Tracking System (ATS) feeds directly from verified
          software and hardware companies using Greenhouse, Lever, and Workable. Every opening is checked
          hourly and automatically expires after 30 days to guarantee active status.
        </p>
      </article>
    </main>
  );
}
