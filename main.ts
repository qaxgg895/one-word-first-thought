// One Word, First Thought — make.fun entry
// Writes the first word that comes to mind to /output/entry.txt.
//
// The word: "flabbergast". It is the sound of being stopped mid-thought —
// the exact word that escapes when something surprises you so hard your
// brain skips a beat. Vivid, a little ridiculous, and impossible to
// mistake for safe filler.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "flabbergast";

// The sealed gate requires 1-24 characters, not only whitespace, and the
// brief requires a single clean word: refuse to write anything that does
// not meet it, so a bad edit can never ship a sentence, a blank, or a word
// with punctuation or spaces attached.
if (WORD.length < 1 || WORD.length > 24) {
  throw new Error(`word must be 1-24 characters, got ${WORD.length}`);
}
if (WORD.trim() === "") {
  throw new Error("word must not be blank");
}
if (/\s/.test(WORD) || /[^A-Za-z]/.test(WORD)) {
  throw new Error("word must be a single clean word with no spaces or punctuation");
}

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, WORD + "\n", "utf8");
