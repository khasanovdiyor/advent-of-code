import { GridRange, getGrid, getInstructions, getRange } from "./common";

const grid = getGrid();
const instructions = getInstructions();

for (let instruction of instructions) {
  const { instructionType, range } = getRange(instruction);
  changeBrightnessForRange(range, instructionType);
}

const totalBrightness = grid.reduce(
  (acc, curr) => acc + curr.reduce((ac, cr) => ac + cr, 0),
  0
);

console.log(totalBrightness);

function changeBrightnessForRange(
  range: GridRange,
  instructionType: "on" | "off" | "toggle"
) {
  const { rStart, cStart, rEnd, cEnd } = range;
  for (let i = rStart; i <= rEnd; i++) {
    for (let j = cStart; j <= cEnd; j++) {
      switch (instructionType) {
        case "on":
          grid[i][j]++;
          break;
        case "off":
          if (grid[i][j] > 0) grid[i][j]--;
          break;
        case "toggle":
          grid[i][j] += 2;
          break;
      }
    }
  }
}
