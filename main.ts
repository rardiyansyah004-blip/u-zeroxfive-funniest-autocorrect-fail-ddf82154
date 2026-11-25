// Funniest Autocorrect Fail — entry program (sharpened).
// The program writes the autocorrect fail to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: 1-199 chars, a single line that reads as a funny autocorrect fail and
// nothing else. The slip is clear ('I love you' for 'I'll review'), the wrong
// word is maximally wrong for a boss, and the joke lands on first read when the
// performance review grows a new section.
// makefun anchor f385d15d57c4d41ec9bd98abbdbabf8109c2d395 round 34272627

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FAIL =
  "I texted my boss 'I love you' instead of 'I'll review' and now my performance review has a whole new section.";

function build(): string {
  const text = FAIL.trim();
  if (text.length < 1 || text.length > 199) {
    throw new Error(`entry must be 1-199 chars, got ${text.length}`);
  }
  return text;
}

function save(text: string): void {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  const target = join(dir, "entry.txt");
  writeFileSync(target, text, "utf8");
  console.log(`wrote ${text.length} chars to ${target}`);
}

save(build());
