import fs from "fs";

const data = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .split("\n")
  .filter((line) => line.trim());

let total = 0;
for (const d of data) {
  const [l, w, h] = d.split("x").map((s) => Number(s));
  total += 2 * l + 2 * w + 2 * h - Math.max(2 * l, 2 * w, 2 * h);
  total += l * w * h;
}

console.log(total);
