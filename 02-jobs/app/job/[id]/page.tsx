import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/chrome";
import { Crumbs, Faq } from "@/components/faq";
import { fetchJobById } from "@/lib/jobs";
import { breadcrumbJsonLd, jobPostingJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ id: string }> };

export const revalidate = 300;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const job = await fetchJobById(id);
  if (!job) return { title: "Listing gone", robots: { index: false, follow: false } };
  const where = job.remote ? "remote" : job.location;
  return pageMeta({
    title: `${job.title} at ${job.company}`,
    description: `${job.title} at ${job.company} (${where}). Third-party listing on Rolepaper — apply on the original posting. ${job.excerpt}`.slice(0, 160),
    path: `/job/${job.id}`,
    publishedTime: job.postedAt,
  });
}

export default async function JobPage({ params }: Props) {
  const { id } = await params;
  const job = await fetchJobById(id);
  if (!job) notFound();

  return (
    <main>
      <JsonLd data={jobPostingJsonLd(job)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Live 100", path: "/jobs" },
          { name: job.title, path: `/job/${job.id}` },
        ])}
      />
      <Crumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Live 100", href: "/jobs" },
          { name: job.title, href: `/job/${job.id}` },
        ]}
      />
      <p className="flag">
        Third-party posting. Rolepaper is not hiring for this role. Applications go to the original
        URL.
      </p>
      <h1>
        {job.title} at {job.company}
      </h1>
      <p>
        {job.company} · {job.remote ? "Remote" : job.location || "On-site"} · {job.employmentType} ·{" "}
        {job.salary}
      </p>
      <p>
        Posted <time dateTime={job.postedAt}>{new Date(job.postedAt).toUTCString()}</time>
        {job.expiresAt ? (
          <>
            {" "}
            · listed expiry <time dateTime={job.expiresAt}>{new Date(job.expiresAt).toUTCString()}</time>
          </>
        ) : (
          " · Rolepaper drops listings older than 30 days"
        )}
      </p>
      {job.remote ? (
        <p className="essay">
          This listing is advertised as remote. Country eligibility, if any, is on the original
          posting — Rolepaper does not invent a work-authorization country.
        </p>
      ) : null}
      <p>
        Source:{" "}
        <a href={job.sourceHome} rel="noopener noreferrer" target="_blank">
          {job.sourceLabel}
        </a>
      </p>
      <article className="essay">
        <h2>About this role</h2>
        <p>{job.description || job.excerpt || "Full description is on the apply page."}</p>
      </article>
      <p style={{ marginTop: "1.5rem" }}>
        <a className="stamp" href={job.applyUrl} rel="noopener noreferrer" target="_blank">
          Apply on the original posting
        </a>
      </p>
      <p>
        <Link href="/jobs">Back to the live 100</Link>
        {" · "}
        <Link href="/software-jobs">Software jobs</Link>
        {" · "}
        <Link href="/remote-jobs">Remote jobs</Link>
      </p>
      <Faq
        items={[
          {
            question: `Is Rolepaper hiring for ${job.title}?`,
            answer: `No. ${job.company} is the employer. Rolepaper only mirrors a public listing and sends you to the original apply URL.`,
          },
          {
            question: "How old is this listing?",
            answer: `Posted ${new Date(job.postedAt).toUTCString()}. Listings older than 30 days, or past the source expiry, are removed.`,
          },
        ]}
      />
    </main>
  );
}
