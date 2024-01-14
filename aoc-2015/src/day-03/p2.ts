import fs from "fs";
import { move } from "./common";

const data = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .split("")
  .filter((line) => line.trim());

const santaPoint: [number, number] = [0, 0];
const roboSantaPoint: [number, number] = [0, 0];
const santSeen: Record<string, boolean> = { "0,0": true };

for (let i = 0; i < data.length; i++) {
  const dir = data[i];
  if (i % 2) move(santaPoint, dir);
  else move(roboSantaPoint, dir);
  santSeen[santaPoint.join(",")] = true;
  santSeen[roboSantaPoint.join(",")] = true;
}

console.log(Object.keys(santSeen).length);
