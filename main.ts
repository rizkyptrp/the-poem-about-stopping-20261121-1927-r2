// The poem about stopping — writes one short poem about agency
// (the power to stop and to stay) to /output/entry.txt.
// Node 22+, stdlib only, deterministic, no network.
//
// The poem's image: a kettle left to boil, a switch the hand knows
// but does not touch. Stopping here is a choice made by the hands
// that hold the thread, not a failure to keep going.
// The steam's small cloud is the trace of what was allowed to end.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "The kettle sang, and I did nothing.",
  "Let it boil dry, let the steam",
  "write its small cloud on the window.",
  "My hand knew the switch. It stayed.",
  "",
  "Stopping is not losing the thread.",
  "It is choosing which hands hold it.",
].join("\n");

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM + "\n", "utf8");
