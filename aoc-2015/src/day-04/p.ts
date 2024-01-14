import fs from "fs";
import { getLowestNumberToMakeHashStartWithZeros } from "./common";

const data = fs.readFileSync(__dirname + "/input.txt", "utf-8");

console.log("problem 1:", getLowestNumberToMakeHashStartWithZeros(data, 5));
console.log("problem 2:", getLowestNumberToMakeHashStartWithZeros(data, 6));
