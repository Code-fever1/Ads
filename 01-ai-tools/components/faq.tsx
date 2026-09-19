import Link from "next/link";

export function Faq({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <section className="faq" aria-labelledby="faq-heading">
      <h2 id="faq-heading">Questions people ask</h2>
      {items.map((item) => (
        <div key={item.question}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </section>
  );
}

export function Crumbs({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={item.href}>
            {index < items.length - 1 ? <Link href={item.href}>{item.name}</Link> : <span>{item.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
