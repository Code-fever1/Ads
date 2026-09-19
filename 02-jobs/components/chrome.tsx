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
          <img src="/mark.png" alt="" width={36} height={36} />
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
        Listings are fetched from public APIs (Remote OK, Himalayas, Arbeitnow), dated, and dropped when
        stale. Apply on the original posting.
      </p>
      <p>
        <Link href="/sources">Attribution</Link> · <Link href="/career">Career desk</Link>
      </p>
    </footer>
  );
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
