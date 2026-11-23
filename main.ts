import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const letter = "O";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", letter, "utf8");

const written = readFileSync("/output/entry.txt", "utf8");
if (written.length !== 1 || !/^[A-Z]$/.test(written)) {
  throw new Error("entry must be exactly one letter A-Z");
}
