import fs from "fs";

const data = fs.readFileSync(__dirname + "/input.txt", "utf-8").split("\n");

let niceStrinsCount = 0;
for (let str of data) {
  if (isNiceString(str)) niceStrinsCount++;
}

console.log(niceStrinsCount);

function isNiceString(str: string) {
  return (
    containsPairOfLetterTwice(str) && containsLetterBetweenSameLetters(str)
  );
}

//ex: aabcdefaa -> aa, xyfdxy -> xy
function containsPairOfLetterTwice(str: string) {
  for (let i = 0; i < str.length - 2; i++) {
    const pair = str.slice(i, i + 2);

    if (str.slice(i + 2).includes(pair)) return true;
  }

  return false;
}

// ex: aba, xyx, dcd
function containsLetterBetweenSameLetters(str: string) {
  for (let i = 0; i < str.length - 2; i++) {
    if (str[i] === str[i + 2]) return true;
  }

  return false;
}
