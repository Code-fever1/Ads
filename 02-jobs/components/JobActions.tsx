"use client";

import { useEffect, useState } from "react";

export function JobActions({
  jobId,
  jobTitle,
  applyUrl,
}: {
  jobId: string;
  jobTitle: string;
  applyUrl: string;
}) {
  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("rolepaper_saved_jobs") || "[]");
      setIsSaved(saved.includes(jobId));
    } catch {
      // ignore
    }
  }, [jobId]);

  function toggleSave() {
    try {
      const saved: string[] = JSON.parse(localStorage.getItem("rolepaper_saved_jobs") || "[]");
      let next: string[];
      if (saved.includes(jobId)) {
        next = saved.filter((id) => id !== jobId);
        setIsSaved(false);
      } else {
        next = [...saved, jobId];
        setIsSaved(true);
      }
      localStorage.setItem("rolepaper_saved_jobs", JSON.stringify(next));
      // dispatch storage event so other components update live
      window.dispatchEvent(new Event("storage"));
    } catch {
      // ignore
    }
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="job-quick-actions">
      <button
        type="button"
        className={`job-save-btn ${isSaved ? "saved" : ""}`}
        onClick={toggleSave}
        title={isSaved ? "Remove from saved list" : "Bookmark this job"}
      >
        <span>{isSaved ? "★ Shortlisted" : "☆ Save Job"}</span>
      </button>

      <button
        type="button"
        className="job-copy-btn"
        onClick={copyLink}
        title="Copy link to this job listing"
      >
        <span>{copied ? "✓ Copied" : "⎘ Share"}</span>
      </button>

      <a
        className="stamp small"
        href={applyUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        Apply ↗
      </a>
    </div>
  );
}
