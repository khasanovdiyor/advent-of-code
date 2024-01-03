import fs from "fs";

const data = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .split("\n")
  .filter((line) => line.trim());

let total = 0;
for (const d of data) {
  const [l, w, h] = d.split("x").map((s) => Number(s));
  total += 2 * l * w + 2 * w * h + 2 * h * l;
  total += Math.min(l * w, l * h, w * h);
}

console.log(total);
