import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/chrome";
import { fetchJobById } from "@/lib/jobs";
import { absUrl } from "@/lib/site";

type Props = { params: Promise<{ id: string }> };

export const revalidate = 300;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const job = await fetchJobById(id);
  if (!job) return { title: "Listing gone" };
  return {
    title: `${job.title} at ${job.company}`,
    description: job.excerpt,
  };
}

export default async function JobPage({ params }: Props) {
  const { id } = await params;
  const job = await fetchJobById(id);
  if (!job) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description || job.excerpt,
    datePosted: job.postedAt,
    validThrough: job.expiresAt ?? undefined,
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: job.company,
    },
    jobLocationType: job.remote ? "TELECOMMUTE" : undefined,
    jobLocation: {
      "@type": "Place",
      address: job.location || "Remote",
    },
    directApply: false,
    url: absUrl(`/job/${job.id}`),
  };

  return (
    <main>
      <JsonLd data={jsonLd} />
      <p className="flag">
        Third-party posting. Rolepaper is not hiring for this role. Applications go to the original
        URL.
      </p>
      <h1>{job.title}</h1>
      <p>
        {job.company} · {job.location || "Remote"} · {job.employmentType} · {job.salary}
      </p>
      <p>
        Posted {new Date(job.postedAt).toUTCString()}
        {job.expiresAt ? ` · listed expiry ${new Date(job.expiresAt).toUTCString()}` : ""}
      </p>
      <p>
        Source:{" "}
        <a href={job.sourceHome} rel="noopener noreferrer" target="_blank">
          {job.sourceLabel}
        </a>
      </p>
      <article className="essay">
        <p>{job.description || job.excerpt || "Full description is on the apply page."}</p>
      </article>
      <p style={{ marginTop: "1.5rem" }}>
        <a className="stamp" href={job.applyUrl} rel="noopener noreferrer" target="_blank">
          Apply on the original posting
        </a>
      </p>
      <p>
        <Link href="/jobs">Back to the live 100</Link>
      </p>
    </main>
  );
}
