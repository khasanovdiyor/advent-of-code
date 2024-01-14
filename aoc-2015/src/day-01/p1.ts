import fs from "fs";

const data = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .split("")
  .filter((line) => line.trim());

let currFloor = 0;
data.forEach((brace) => {
  if (brace === "(") currFloor++;
  else currFloor--;
});
console.log(currFloor);
