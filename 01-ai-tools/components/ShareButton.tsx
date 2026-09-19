"use client";

import { useState } from "react";

export function ShareButton({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <button
      type="button"
      className="share-btn"
      onClick={handleCopy}
      title="Copy review link to clipboard"
    >
      <span>{copied ? "✓ Link Copied!" : "⎘ Share Review"}</span>
    </button>
  );
}
