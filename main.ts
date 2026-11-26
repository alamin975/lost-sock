// Funniest Lost Sock Status Update — entry program.
// Writes exactly one status update in the voice of a lost sock to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// Entry text: one status update from a lost sock that ended up in the fridge.
const entry =
  "Update: I'm in the fridge now. No idea how. My partner is still in the dryer, and honestly, I'm thriving.";

// writeEntry() wraps the write so the entry is emitted exactly once, as UTF-8.
function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry, "utf8");
}

writeEntry();
console.log(entry);
console.log(`chars: ${entry.length}`);
