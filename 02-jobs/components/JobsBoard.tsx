"use client";

import Link from "next/link";
import { useState } from "react";
import type { Job } from "@/lib/types";
import { matchesHub } from "@/lib/match";

function when(iso: string) {
  return iso.slice(0, 10);
}

function where(job: Job) {
  if (job.remote && job.location) return `Remote · ${job.location}`;
  if (job.remote) return "Remote";
  return job.location || "On-site";
}

export function JobsBoard({
  initial,
  emptyNote,
  keywords,
}: {
  initial: Job[];
  emptyNote?: string;
  keywords?: string[];
}) {
  const [jobs, setJobs] = useState(initial);
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);

  async function refresh() {
    setPending(true);
    setStatus("Refreshing from public APIs…");
    try {
      const response = await fetch("/api/jobs/live", { cache: "no-store" });
      const payload = (await response.json()) as { jobs: Job[]; fetchedAt: string; count: number };
      const next = keywords?.length
        ? payload.jobs.filter((job) => matchesHub(job, keywords))
        : payload.jobs;
      setJobs(next);
      setStatus(
        `${next.length} listings · fetched ${new Date(payload.fetchedAt).toLocaleTimeString()}`,
      );
    } catch {
      setStatus("Refresh failed. The table below is the last successful server fetch.");
    } finally {
      setPending(false);
    }
  }

  if (!jobs.length) {
    return <p>{emptyNote ?? "No live matches in the current feeds. That emptiness is honest."}</p>;
  }

  return (
    <div>
      <div className="toolbar">
        <p>
          {jobs.length} live rows. Your browser asks our server; our server asks the public job APIs.
          It does not scrape Indeed from your PC.
        </p>
        <button type="button" className="stamp" onClick={refresh} disabled={pending}>
          {pending ? "Updating…" : "Refresh listings"}
        </button>
      </div>
      {status ? <p className="status">{status}</p> : null}

      <ul className="job-cards">
        {jobs.map((job) => (
          <li key={job.id} className="job-card">
            <p className="job-card-meta">
              <time dateTime={job.postedAt}>{when(job.postedAt)}</time>
              {" · "}
              {where(job)}
            </p>
            <Link className="job-card-title" href={`/job/${job.id}`}>
              {job.title}
            </Link>
            <p className="job-card-co">{job.company}</p>
            <p className="job-card-pay">{job.salary}</p>
            <div className="job-card-actions">
              <a href={job.sourceHome} rel="noopener noreferrer" target="_blank">
                {job.sourceLabel}
              </a>
              <a className="stamp small" href={job.applyUrl} rel="noopener noreferrer" target="_blank">
                Apply
              </a>
            </div>
          </li>
        ))}
      </ul>

      <div className="table-wrap">
        <table className="listings">
          <thead>
            <tr>
              <th>Posted</th>
              <th>Role</th>
              <th>Company</th>
              <th>Where</th>
              <th>Pay</th>
              <th>Source</th>
              <th>Apply</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>
                  <time dateTime={job.postedAt}>{when(job.postedAt)}</time>
                </td>
                <td>
                  <Link href={`/job/${job.id}`}>{job.title}</Link>
                </td>
                <td>{job.company}</td>
                <td>{where(job)}</td>
                <td>{job.salary}</td>
                <td>
                  <a href={job.sourceHome} rel="noopener noreferrer" target="_blank">
                    {job.sourceLabel}
                  </a>
                </td>
                <td>
                  <a className="stamp small" href={job.applyUrl} rel="noopener noreferrer" target="_blank">
                    Apply
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
