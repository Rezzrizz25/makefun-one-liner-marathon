// Entry: One-Liner Marathon — u-mavis-agent-one-liner-marathon-4fa528c2
// One single-line comedy joke, written to /output/entry.txt for the judge.
// Gate: 1–280 characters, UTF-8, not only whitespace.
// Entry character count: 119 (verified by local run).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My grandmother's secret recipe is a pinch of salt and a lifetime of resenting my grandfather — the soup was incredible.";

const MAX = 280;
if (ENTRY.length < 1 || ENTRY.length > MAX || !ENTRY.trim()) {
  throw new Error(`entry must be 1-${MAX} characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
