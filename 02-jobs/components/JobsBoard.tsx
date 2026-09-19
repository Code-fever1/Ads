"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
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

  // Engagement & Filter States
  const [search, setSearch] = useState("");
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [selectedDesk, setSelectedDesk] = useState<string>("all");
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [savedJobIds, setSavedJobIds] = useState<string[]>([]);

  // Load and listen to saved jobs
  useEffect(() => {
    function loadSaved() {
      try {
        const stored = JSON.parse(localStorage.getItem("rolepaper_saved_jobs") || "[]");
        setSavedJobIds(stored);
      } catch {
        setSavedJobIds([]);
      }
    }
    loadSaved();

    window.addEventListener("storage", loadSaved);
    return () => window.removeEventListener("storage", loadSaved);
  }, []);

  function toggleSaveJob(id: string) {
    try {
      const stored: string[] = JSON.parse(localStorage.getItem("rolepaper_saved_jobs") || "[]");
      let next: string[];
      if (stored.includes(id)) {
        next = stored.filter((item) => item !== id);
      } else {
        next = [...stored, id];
      }
      localStorage.setItem("rolepaper_saved_jobs", JSON.stringify(next));
      setSavedJobIds(next);
    } catch {
      // ignore
    }
  }

  const desks = [
    { label: "All Roles", value: "all" },
    { label: "Software", value: "software" },
    { label: "AI / ML", value: "ml" },
    { label: "Electrical", value: "electrical" },
    { label: "Frontend", value: "frontend" },
    { label: "Backend / Infra", value: "backend" },
  ];

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

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // Search term filter
      const q = search.toLowerCase();
      const matchesSearch =
        q === "" ||
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        (job.location && job.location.toLowerCase().includes(q)) ||
        job.tags.some((t) => t.toLowerCase().includes(q));

      // Remote filter
      const matchesRemote = !remoteOnly || job.remote;

      // Desk filter
      let matchesDesk = true;
      if (selectedDesk === "software") {
        matchesDesk =
          job.title.toLowerCase().includes("software") ||
          job.title.toLowerCase().includes("developer") ||
          job.title.toLowerCase().includes("engineer");
      } else if (selectedDesk === "ml") {
        matchesDesk =
          job.title.toLowerCase().includes("ai") ||
          job.title.toLowerCase().includes("ml") ||
          job.title.toLowerCase().includes("learning") ||
          job.title.toLowerCase().includes("data");
      } else if (selectedDesk === "electrical") {
        matchesDesk =
          job.title.toLowerCase().includes("electrical") ||
          job.title.toLowerCase().includes("hardware") ||
          job.title.toLowerCase().includes("embedded");
      } else if (selectedDesk === "frontend") {
        matchesDesk =
          job.title.toLowerCase().includes("frontend") ||
          job.title.toLowerCase().includes("react") ||
          job.title.toLowerCase().includes("web");
      } else if (selectedDesk === "backend") {
        matchesDesk =
          job.title.toLowerCase().includes("backend") ||
          job.title.toLowerCase().includes("cloud") ||
          job.title.toLowerCase().includes("devops") ||
          job.title.toLowerCase().includes("infra");
      }

      // Saved only filter
      const matchesSaved = !showSavedOnly || savedJobIds.includes(job.id);

      return matchesSearch && matchesRemote && matchesDesk && matchesSaved;
    });
  }, [jobs, search, remoteOnly, selectedDesk, showSavedOnly, savedJobIds]);

  if (!jobs.length) {
    return <p>{emptyNote ?? "No live matches in the current feeds. That emptiness is honest."}</p>;
  }

  return (
    <div className="jobsboard-root">
      {/* Search & Filter Toolbar */}
      <div className="jobs-filter-panel">
        <div className="jobs-search-row">
          <div className="jobs-search-box">
            <span className="search-symbol">⌕</span>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, company, or stack (e.g. 'React', 'Staff', 'Hardware')..."
              className="jobs-search-input"
              aria-label="Filter live jobs"
            />
            {search && (
              <button
                type="button"
                className="jobs-clear-search"
                onClick={() => setSearch("")}
              >
                ✕
              </button>
            )}
          </div>

          <label className="remote-toggle-label">
            <input
              type="checkbox"
              checked={remoteOnly}
              onChange={(e) => setRemoteOnly(e.target.checked)}
              className="remote-checkbox"
            />
            <span>Remote Only 🌐</span>
          </label>

          <button
            type="button"
            className={`saved-tab-btn ${showSavedOnly ? "active" : ""}`}
            onClick={() => setShowSavedOnly(!showSavedOnly)}
          >
            ★ Saved Roles ({savedJobIds.length})
          </button>

          <button type="button" className="stamp refresh-btn" onClick={refresh} disabled={pending}>
            {pending ? "Updating…" : "↻ Refresh Wires"}
          </button>
        </div>

        {/* Desk Chips */}
        <div className="desk-chips-strip">
          <span className="desk-strip-label">Desks:</span>
          {desks.map((desk) => (
            <button
              key={desk.value}
              type="button"
              className={`desk-chip ${selectedDesk === desk.value ? "active" : ""}`}
              onClick={() => setSelectedDesk(desk.value)}
            >
              {desk.label}
            </button>
          ))}

          {(search || remoteOnly || selectedDesk !== "all" || showSavedOnly) && (
            <button
              type="button"
              className="reset-filters-btn"
              onClick={() => {
                setSearch("");
                setRemoteOnly(false);
                setSelectedDesk("all");
                setShowSavedOnly(false);
              }}
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      <div className="results-status-bar">
        <p className="results-count">
          Showing <strong>{filteredJobs.length}</strong> of {jobs.length} live listings
          {showSavedOnly ? " (Saved Shortlist)" : ""}
        </p>
        {status ? <p className="status-message">{status}</p> : null}
      </div>

      {filteredJobs.length === 0 ? (
        <div className="no-matches-box">
          <p>
            {showSavedOnly
              ? "You haven't saved any listings to your shortlist yet. Click '☆ Save' on any job card to bookmark it."
              : `No live roles match the current filters.`}
          </p>
          <button
            type="button"
            className="stamp small"
            onClick={() => {
              setSearch("");
              setRemoteOnly(false);
              setSelectedDesk("all");
              setShowSavedOnly(false);
            }}
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <>
          {/* Card View for Mobile & Tablet */}
          <ul className="job-cards">
            {filteredJobs.map((job) => {
              const isSaved = savedJobIds.includes(job.id);
              return (
                <li key={job.id} className="job-card">
                  <div className="job-card-top-flex">
                    <p className="job-card-meta">
                      <time dateTime={job.postedAt}>{when(job.postedAt)}</time>
                      {" · "}
                      {where(job)}
                    </p>
                    <button
                      type="button"
                      className={`card-bookmark-btn ${isSaved ? "saved" : ""}`}
                      onClick={() => toggleSaveJob(job.id)}
                      title={isSaved ? "Remove from shortlist" : "Save this job"}
                    >
                      {isSaved ? "★ Saved" : "☆ Save"}
                    </button>
                  </div>

                  <Link className="job-card-title" href={`/job/${job.id}`}>
                    {job.title}
                  </Link>
                  <p className="job-card-co">{job.company}</p>
                  <p className="job-card-pay">{job.salary}</p>

                  <div className="job-card-actions">
                    <a href={job.sourceHome} rel="noopener noreferrer" target="_blank" className="source-link">
                      {job.sourceLabel}
                    </a>
                    <div className="card-btn-cluster">
                      <Link href={`/job/${job.id}`} className="view-detail-btn">
                        Details →
                      </Link>
                      <a className="stamp small" href={job.applyUrl} rel="noopener noreferrer" target="_blank">
                        Apply ↗
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Detailed Table View for Desktop */}
          <div className="table-wrap">
            <table className="listings">
              <thead>
                <tr>
                  <th>Save</th>
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
                {filteredJobs.map((job) => {
                  const isSaved = savedJobIds.includes(job.id);
                  return (
                    <tr key={job.id} className={isSaved ? "saved-row" : ""}>
                      <td style={{ width: "3.5rem", textAlign: "center" }}>
                        <button
                          type="button"
                          className={`table-star-btn ${isSaved ? "saved" : ""}`}
                          onClick={() => toggleSaveJob(job.id)}
                          title={isSaved ? "Saved" : "Save job"}
                        >
                          {isSaved ? "★" : "☆"}
                        </button>
                      </td>
                      <td>
                        <time dateTime={job.postedAt}>{when(job.postedAt)}</time>
                      </td>
                      <td>
                        <Link href={`/job/${job.id}`} className="table-role-link">
                          {job.title}
                        </Link>
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
                          Apply ↗
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
