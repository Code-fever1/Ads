import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/chrome";
import { Crumbs, Faq } from "@/components/faq";
import { JobActions } from "@/components/JobActions";
import { fetchJobById, fetchLiveJobs } from "@/lib/jobs";
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

  // Find similar jobs to keep readers browsing
  const livePool = await fetchLiveJobs(40);
  const similarJobs = livePool
    .filter((j) => j.id !== job.id)
    .filter((j) => {
      if (job.remote && j.remote) return true;
      const jobWords = job.title.toLowerCase().split(/\s+/);
      return jobWords.some((w) => w.length > 3 && j.title.toLowerCase().includes(w));
    })
    .slice(0, 4);

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
        Third-party classified. Rolepaper is an independent aggregator. Applications submit directly
        to the origin source.
      </p>

      <div className="job-headline-block">
        <h1>
          {job.title} at {job.company}
        </h1>
        <JobActions jobId={job.id} jobTitle={job.title} applyUrl={job.applyUrl} />
      </div>

      <div className="job-meta-chips">
        <span className="job-chip company-chip">{job.company}</span>
        <span className="job-chip loc-chip">{job.remote ? "Remote 🌐" : job.location || "On-site"}</span>
        <span className="job-chip type-chip">{job.employmentType}</span>
        {job.salary && <span className="job-chip pay-chip">{job.salary}</span>}
      </div>

      <div className="job-timestamp-bar">
        <span>Posted <time dateTime={job.postedAt}>{new Date(job.postedAt).toUTCString()}</time></span>
        <span>·</span>
        <span>
          {job.expiresAt ? (
            <>Expiry: <time dateTime={job.expiresAt}>{new Date(job.expiresAt).toUTCString()}</time></>
          ) : (
            "Auto-expires in 30 days"
          )}
        </span>
        <span>·</span>
        <span>
          Origin:{" "}
          <a href={job.sourceHome} rel="noopener noreferrer" target="_blank" className="source-link">
            {job.sourceLabel}
          </a>
        </span>
      </div>

      {job.remote ? (
        <p className="essay remote-notice">
          <strong>Remote Notice:</strong> This listing is marked as remote. Regional or national work-authorization requirements, if any, are governed by the hiring company on the origin application page.
        </p>
      ) : null}

      <article className="essay job-content-box">
        <h2>About this opening</h2>
        <p>{job.description || job.excerpt || "Full description is on the apply page."}</p>
      </article>

      <div className="apply-banner">
        <div>
          <h3 style={{ margin: 0, fontSize: "1.2rem" }}>Ready to apply?</h3>
          <p style={{ margin: "0.2rem 0 0", fontSize: "0.9rem", opacity: 0.9 }}>
            Submit your resume directly on {job.sourceLabel} without intermediary accounts.
          </p>
        </div>
        <a className="stamp" href={job.applyUrl} rel="noopener noreferrer" target="_blank">
          Apply on original posting ↗
        </a>
      </div>

      {/* Similar Live Openings Module */}
      {similarJobs.length > 0 && (
        <section className="similar-jobs-section">
          <div className="similar-header">
            <h2>Similar Openings on the Wires</h2>
            <Link href="/jobs" className="view-more-jobs">
              View all live classifieds ({livePool.length}) →
            </Link>
          </div>

          <div className="similar-grid">
            {similarJobs.map((simJob) => (
              <div key={simJob.id} className="similar-job-card">
                <div className="similar-card-top">
                  <span className="sim-where">{simJob.remote ? "Remote" : simJob.location || "On-site"}</span>
                  <span className="sim-pay">{simJob.salary}</span>
                </div>
                <h3 className="sim-title">
                  <Link href={`/job/${simJob.id}`}>{simJob.title}</Link>
                </h3>
                <p className="sim-co">{simJob.company}</p>
                <div className="similar-card-footer">
                  <Link href={`/job/${simJob.id}`} className="sim-details-btn">
                    Read Details →
                  </Link>
                  <a
                    href={simJob.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sim-apply-btn"
                  >
                    Apply ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="desk-nav-footer">
        <Link href="/jobs" className="desk-foot-link">
          ← Back to Live 100
        </Link>
        <div className="desk-foot-pills">
          <Link href="/software-jobs">Software Jobs</Link>
          <Link href="/remote-jobs">Remote Jobs</Link>
          <Link href="/electrical-engineer-jobs">Electrical Roles</Link>
          <Link href="/career">Career Essays</Link>
        </div>
      </div>

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
