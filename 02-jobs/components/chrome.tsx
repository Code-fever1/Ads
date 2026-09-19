import Link from "next/link";

const nav = [
  ["Live 100", "/jobs"],
  ["Software", "/software-jobs"],
  ["Electrical", "/electrical-engineer-jobs"],
  ["Remote", "/remote-jobs"],
  ["Career", "/career"],
  ["Sources", "/sources"],
] as const;

export function SiteHeader() {
  return (
    <header className="masthead">
      <div>
        <Link href="/" className="paper-name">
          <img src="/mark.png" alt="Rolepaper logo" width={36} height={36} />
          Rolepaper
        </Link>
        <p className="deck">Third-party tech &amp; electrical listings. We are not the employer.</p>
      </div>
      <nav aria-label="Desks">
        {nav.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="paper-foot">
      <p>
        Rolepaper is a third-party job aggregator on rolepaper.toolfolio.page. We are not the employer.
        Listings come from Remote OK, Himalayas, and Arbeitnow, then drop after 30 days. Apply on the
        original posting. Part of <a href="https://toolfolio.page">Toolfolio</a>.
      </p>
      <p>
        <Link href="/sources">Attribution</Link> · <Link href="/career">Career desk</Link> ·{" "}
        <a href="/llms.txt">llms.txt</a>
      </p>
    </footer>
  );
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
