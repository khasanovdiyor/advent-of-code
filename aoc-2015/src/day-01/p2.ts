import fs from "fs";

const data = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .split("")
  .filter((line) => line.trim());

let currFloor = 0;
data.forEach((brace, idx) => {
  if (brace === "(") currFloor++;
  else currFloor--;
  if (currFloor === -1) {
    console.log(idx + 1);
  }
});
