import fs from "fs";

export function getInstructions() {
  return fs
    .readFileSync(__dirname + "/input.txt", "utf-8")
    .split("\n")
    .map((line) => line.split(" "));
}

export function getGrid(): Grid {
  return Array(1000)
    .fill(null)
    .map((_) => Array(1000).fill(0));
}

export function getRange(instruction: string[]) {
  let rStart,
    cStart,
    rEnd,
    cEnd,
    rStartCStart,
    rEndCEnd,
    instructionType: InStructionType = "toggle";
  if (instruction[0] === "turn") {
    instructionType = instruction[1] as InStructionType;
    rStartCStart = instruction[2];
    rEndCEnd = instruction[4];
  } else {
    rStartCStart = instruction[1];
    rEndCEnd = instruction[3];
  }
  [rStart, cStart] = rStartCStart.split(",").map((c) => Number(c));
  [rEnd, cEnd] = rEndCEnd.split(",").map((c) => Number(c));

  return { instructionType, range: { rStart, cStart, rEnd, cEnd } };
}

export function getTotalBrightness(grid: Grid) {
  return grid.reduce(
    (acc, curr) => acc + curr.reduce((ac, cr) => ac + cr, 0),
    0
  );
}

export type InStructionType = "on" | "off" | "toggle";

export type Grid = number[][];

export type GridRange = {
  rStart: number;
  cStart: number;
  rEnd: number;
  cEnd: number;
};
