import type { Metadata } from "next";
import Link from "next/link";
import { careerPages } from "@/data/career";

export const metadata: Metadata = {
  title: "Career desk",
  description: "CV, interviews, salaries, and how-to pages. Better ad inventory than listing tables.",
};

export default function CareerIndex() {
  return (
    <main>
      <h1>Career desk</h1>
      <p className="essay">
        These pages are written to be useful and, later, to hold AdSense without sitting on top of
        every apply button. They are not medical, legal, or investment advice.
      </p>
      <ul>
        {careerPages.map((page) => (
          <li key={page.slug}>
            <Link href={`/career/${page.slug}`}>{page.title}</Link>
            <div>{page.summary}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
