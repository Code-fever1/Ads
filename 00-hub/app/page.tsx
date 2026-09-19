export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="kicker">Apex · toolfolio.page</p>
        <h1>Each niche gets its own front door.</h1>
        <p className="lede">
          Toolfolio is the house, not the product. Kiln and Rolepaper are the working sites. A third
          desk (deals) stays dark until it has its own pages.
        </p>
      </section>
      <div className="sites">
        <a className="site-card" href="https://kiln.toolfolio.page">
          <span className="idx">01</span>
          <div>
            <h2>Kiln</h2>
            <p>Dated AI tools directory, comparisons, and skip-if notes.</p>
          </div>
          <span className="go">kiln.toolfolio.page</span>
        </a>
        <a className="site-card" href="https://rolepaper.toolfolio.page">
          <span className="idx">02</span>
          <div>
            <h2>Rolepaper</h2>
            <p>Live tech and electrical listings from public job APIs.</p>
          </div>
          <span className="go">rolepaper.toolfolio.page</span>
        </a>
        <div className="site-card soon">
          <span className="idx">03</span>
          <div>
            <h2>Floor Price</h2>
            <p>Gaming and gadget deals. Research only — not live yet.</p>
          </div>
          <span className="go">later</span>
        </div>
      </div>
    </main>
  );
}
