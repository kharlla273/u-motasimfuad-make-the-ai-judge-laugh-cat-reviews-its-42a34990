// Cat Reviews Its Human — make.fun entry
// A deterministic program: writes one funny single-line one-star review,
// written by a house cat about its human, to /output/entry.txt.
// The grader runs this as main.ts (node22) with MAKEFUN_OUTPUT_DIR set to
// the /output mount; locally it defaults to ./out for testing.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One star. Deadpan review shape, one specific recognisable complaint
// (the laptop keyboard), feline voice throughout, and the sting lands in
// the last two words: the cat is not the interruption, it is management.
const ENTRY =
  "One star. My human works from home now, so I sit on his keyboard all day to help. He calls it 'sabotage'. I call it management.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the gate counts the file at 1-200 characters,
// and a single line with no newline keeps the count exact.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
