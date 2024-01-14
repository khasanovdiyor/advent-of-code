import fs from "fs";
import { move } from "./common";

const data = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .split("")
  .filter((line) => line.trim());

const point: [number, number] = [0, 0];
const seen: Record<string, boolean> = { "0,0": true };

for (let i = 0; i < data.length; i++) {
  const dir = data[i];
  move(point, dir);
  seen[point.join(",")] = true;
}

console.log(Object.keys(seen).length);
