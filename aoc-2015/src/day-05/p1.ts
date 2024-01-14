import fs from "fs";

const data = fs.readFileSync(__dirname + "/input.txt", "utf-8").split("\n");

let niceStrinsCount = 0;
for (let str of data) {
  if (isNiceString(str)) niceStrinsCount++;
}

console.log(niceStrinsCount);

function isNiceString(str: string) {
  return (
    !containsDisallowedStr(str) &&
    containsAtLeastThreeVowels(str) &&
    containsSameLetterTwiceInRow(str)
  );
}

function containsDisallowedStr(str: string) {
  const dissallowedStrings = ["ab", "cd", "pq", "xy"];

  if (dissallowedStrings.some((s) => str.includes(s))) return true;
}

function containsSameLetterTwiceInRow(str: string) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) return true;
  }

  return false;
}

function containsAtLeastThreeVowels(str: string) {
  if (str.length < 3) return false;
  const vowels = "aeiou";
  let count = 0;
  for (let ch of str) {
    if (vowels.includes(ch)) count++;
    if (count === 3) return true;
  }

  return false;
}
