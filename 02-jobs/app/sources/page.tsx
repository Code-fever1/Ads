import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sources",
  description: "Where Rolepaper’s live jobs come from, and why we do not scrape LinkedIn.",
};

export default function SourcesPage() {
  return (
    <main>
      <h1>Sources</h1>
      <article className="essay">
        <p>
          Live rows are fetched server-side from public APIs: Remote OK (
          <a href="https://remoteok.com" rel="noopener noreferrer">
            remoteok.com
          </a>
          ) and Himalayas. Arbeitnow is used only if those two together cannot fill 100 tech rows,
          because its payload is huge. Remote OK requires a follow link when their data is displayed;
          every listing table includes one.
        </p>
        <p>
          Your browser cannot fetch Indeed or LinkedIn listings directly. Those sites block CORS and
          forbid scraping. We will not run a hidden script on your computer to bypass that.
        </p>
        <p>
          Option 2, if the public APIs stay thin for Pakistan or the Gulf: a small VPS that polls
          official Greenhouse and Lever JSON for named companies, stores rows, and expires them. Still
          not a scrape of the mega-boards.
        </p>
      </article>
    </main>
  );
}
