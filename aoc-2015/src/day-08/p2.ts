import fs from "fs";

const data = fs.readFileSync(__dirname + "/input.txt", "utf-8").split("\n");

const total = data.reduce(
  (acc, currLine) => acc + JSON.stringify(currLine).length - currLine.length,
  0
);

console.log(total);
