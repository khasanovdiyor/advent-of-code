import fs from "fs";

const data = fs.readFileSync(__dirname + "/input.txt", "utf-8");
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "j",
  "k",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
] as const;

type Letter = (typeof letters)[number];

function incrementStr(strArr: Letter[]) {
  const len = strArr.length;
  let currCharIdx = len - 1;
  while (strArr[currCharIdx] === "z") {
    strArr[currCharIdx] = "a";
    currCharIdx--;
  }
  const idx = letters.indexOf(strArr[currCharIdx]);
  strArr[currCharIdx] = letters[idx + 1];
}

function isValidPass(strArr: Letter[]) {
  return (
    containsThreeIncreasingLetters(strArr) && containsTwoDifferntPairs(strArr)
  );
}

function containsTwoDifferntPairs(strArr: Letter[]) {
  let pairs = 0;
  let firstLetter = "";
  for (let i = 0; i < strArr.length - 1; i++) {
    if (
      strArr[i] === strArr[i + 1] &&
      (!firstLetter || strArr[i] !== firstLetter)
    ) {
      firstLetter = strArr[i];
      pairs++;
      i++;
    }
    if (pairs === 2) return true;
  }

  return false;
}

function containsThreeIncreasingLetters(strArr: Letter[]) {
  let increasingCount = 1;
  for (let i = 0; i < strArr.length - 1; i++) {
    const idx = letters.indexOf(strArr[i]);
    if (strArr[i + 1] === letters[idx + 1]) {
      increasingCount++;
    } else {
      increasingCount = 1;
    }
    if (increasingCount === 3) return true;
  }

  return false;
}

const charArray = data.split("") as Letter[];
const passwords = [];
while (true) {
  if (isValidPass(charArray)) {
    passwords.push(charArray.join(""));
    if (passwords.length === 2) break;
  }
  incrementStr(charArray);
}

passwords.map((pass, idx) => console.log(`P${idx + 1}: ${pass}`));
