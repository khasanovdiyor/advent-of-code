import fs from "fs";

const data = fs.readFileSync(__dirname + "/input.txt", "utf-8");

function getResultLengthFor(times: number) {
  let res = data;
  for (let i = 0; i < times; i++) {
    const resArr = [];
    let currNumCount = 1;
    for (let j = 0; j < res.length - 1; j++) {
      if (res[j] == res[j + 1]) currNumCount++;
      else {
        resArr.push(currNumCount, res[j]);
        currNumCount = 1;
        if (j + 1 === res.length - 1) {
          resArr.push(1, res[j + 1]);
        }
      }
    }
    res = resArr.join("");
  }

  return res.length;
}

const P1 = 40;
const P2 = 50;
console.log("P1:", getResultLengthFor(P1));
console.log("P2:", getResultLengthFor(P2));
