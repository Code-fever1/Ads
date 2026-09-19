import Link from "next/link";
import { careerPages } from "@/data/career";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Career desk for software engineers",
  description:
    "CV, cover letters, interviews, salaries, and how to become a software engineer — written for Rolepaper readers, not a course funnel.",
  path: "/career",
});

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
