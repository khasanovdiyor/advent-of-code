import input from "./input.json";

function getSum(input: any, p2 = false): number {
  let sum = 0;

  if (Array.isArray(input)) {
    for (const item of input) {
      sum += getSum(item, p2);
    }
  } else if (typeof input === "object") {
    if (p2 && Object.values(input).includes("red")) {
      return 0;
    }
    for (const value of Object.values(input)) {
      sum += getSum(value, p2);
    }
  } else if (typeof input === "number") {
    return input;
  }

  return sum;
}

console.log("P1:", getSum(input));
console.log("P2:", getSum(input, true));
