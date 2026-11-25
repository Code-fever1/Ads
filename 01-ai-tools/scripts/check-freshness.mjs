import fs from "node:fs";
import path from "node:path";

const TOOLS_DIR = path.resolve(process.cwd(), "data/tools");
const MS_PER_DAY = 86_400_000;
const STALE_WARN_DAYS = 30;
const STALE_FAIL_DAYS = 60;

const files = fs
  .readdirSync(TOOLS_DIR)
  .filter((file) => file.endsWith(".json"))
  .sort();

const nowMs = Date.now();
const staleRows = [];
let hasCritical = false;

for (const file of files) {
  const fullPath = path.join(TOOLS_DIR, file);
  const raw = fs.readFileSync(fullPath, "utf8");
  const tool = JSON.parse(raw);
  const parsed = Date.parse(`${tool.lastVerified}T00:00:00Z`);

  if (!Number.isFinite(parsed)) {
    hasCritical = true;
    staleRows.push({
      slug: tool.slug || file,
      name: tool.name || file,
      lastVerified: String(tool.lastVerified || "missing"),
      ageDays: Infinity,
      status: "INVALID DATE",
    });
    continue;
  }

  const ageDays = Math.max(0, Math.floor((nowMs - parsed) / MS_PER_DAY));
  if (ageDays > STALE_FAIL_DAYS) {
    hasCritical = true;
  }
  if (ageDays > STALE_WARN_DAYS) {
    staleRows.push({
      slug: tool.slug,
      name: tool.name,
      lastVerified: tool.lastVerified,
      ageDays,
      status: ageDays > STALE_FAIL_DAYS ? "CRITICAL (>60d)" : "STALE (>30d)",
    });
  }
}

staleRows.sort((a, b) => b.ageDays - a.ageDays);

if (staleRows.length === 0) {
  console.log(`All ${files.length} tool profiles were verified within the last ${STALE_WARN_DAYS} days.`);
  process.exit(0);
}

console.log(
  `\nKiln Freshness Check — ${staleRows.length} of ${files.length} tools need price re-verification:\n`,
);
console.log(
  `${"Slug".padEnd(22)} ${"Last Verified".padEnd(15)} ${"Age".padEnd(8)} Status`,
);
console.log("-".repeat(66));

for (const row of staleRows) {
  const ageLabel = Number.isFinite(row.ageDays) ? `${row.ageDays}d` : "N/A";
  console.log(
    `${String(row.slug).padEnd(22)} ${String(row.lastVerified).padEnd(15)} ${ageLabel.padEnd(8)} ${row.status}`,
  );
}

console.log("");
if (hasCritical) {
  console.error(
    `FAILED: One or more tools are over ${STALE_FAIL_DAYS} days stale (or missing a valid date). Re-verify on official vendor pricing pages and update lastVerified.`,
  );
  process.exit(1);
}

console.log(
  `WARNING: Some tools are over ${STALE_WARN_DAYS} days stale, but none exceed ${STALE_FAIL_DAYS} days.`,
);
process.exit(0);
