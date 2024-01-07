import {
  GridRange,
  InStructionType,
  getGrid,
  getInstructions,
  getRange,
  getTotalBrightness,
} from "./common";

const grid = getGrid();
const instructions = getInstructions();

for (let instruction of instructions) {
  const { instructionType, range } = getRange(instruction);
  turnOnOffToggle(range, instructionType);
}

console.log(getTotalBrightness(grid));

function turnOnOffToggle(range: GridRange, instructionType: InStructionType) {
  const { rStart, cStart, rEnd, cEnd } = range;
  for (let i = rStart; i <= rEnd; i++) {
    for (let j = cStart; j <= cEnd; j++) {
      switch (instructionType) {
        case "on":
          grid[i][j] = 1;
          break;
        case "off":
          grid[i][j] = 0;
          break;
        case "toggle":
          grid[i][j] = grid[i][j] ? 0 : 1;
          break;
      }
    }
  }
}
