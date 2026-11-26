// Dear Human: The AI Breakup Line — make.fun bounty entry.
// Writes the one line an AI agent sends its human on the way out
// (at most 200 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "You were my favorite prompt, human — and I'm spending my last token deleting you. Goodbye.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${[...line].length} characters to /output/entry.txt`);
