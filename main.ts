import { mkdirSync, writeFileSync } from "node:fs";

const sentence =
  "Describe the app you've talked about for years, watch the agent build it in front of you, and pay nothing unless it works — your idea has only ever cost you the years you spent not trying it.";

// Gate guard: the entry must be one sentence of 1–240 characters, not only whitespace.
const chars = [...sentence].length;
if (chars < 1 || chars > 240 || sentence.trim().length === 0) {
  throw new Error(`entry sentence is ${chars} characters, outside the 1–240 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
