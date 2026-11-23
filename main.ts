// Office joke entry: writes one line to /output/entry.txt, deterministically.
// The gate requires 1-199 UTF-8 characters, so the line is checked before writing.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I stayed muted the whole call, nodded for forty minutes, and got promoted for my 'excellent listening skills.'";

if (JOKE.length < 1 || JOKE.length > 199 || JOKE.trim().length === 0) {
  throw new Error(`joke length ${JOKE.length} is outside the 1-199 character gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
