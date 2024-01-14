import fs from "fs";

const data = fs.readFileSync(__dirname + "/input.txt", "utf-8").split("\n");

const totalLen = data.reduce((acc, currLine) => acc + currLine.length, 0);
const totalInMemory = data.reduce(
  (acc, currLine) => acc + eval(currLine).length,
  0
);

console.log(totalLen - totalInMemory);
