import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import type { FaqItem } from "@/lib/types";

export function Faq({ items }: { items: FaqItem[] }) {
  if (!items.length) return null;
  return (
    <section className="faq" aria-labelledby="faq-heading">
      <h2 id="faq-heading">Questions people ask</h2>
      <FaqAccordion items={items} />
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
