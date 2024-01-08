import fs from "fs";

export function getMap() {
  const data = fs
    .readFileSync(__dirname + "/input.txt", "utf-8")
    .split("\n")
    .map((line) => line.split(" -> "));

  const map: SignalMap = {};
  data.forEach(([operation, key]) => {
    map[key] = operation;
  });

  return map;
}

export function isNumber(val: string) {
  return !isNaN(Number(val));
}

export function updateMapValue(map: SignalMap, key: string) {
  const valArr = map[key].split(" ");

  const operations: Record<string, Function> = {
    "1": () => {
      if (isNumber(map[valArr[0]])) map[key] = map[valArr[0]];
    },
    "2": () => {
      const value = isNumber(valArr[1]) ? valArr[1] : map[valArr[1]];
      if (isNumber(value)) map[key] = `${65535 - Number(value)}`;
    },
    "3": () => {
      const [val1, op, val2] = valArr;
      const num1 = isNumber(val1) ? val1 : map[val1];
      const num2 = isNumber(val2) ? val2 : map[val2];
      if (isNumber(num1) && isNumber(num2)) {
        const numVal1 = Number(num1);
        const numVal2 = Number(num2);
        switch (op) {
          case "AND":
            map[key] = `${numVal1 & numVal2}`;
            break;
          case "OR":
            map[key] = `${numVal1 | numVal2}`;
            break;
          case "RSHIFT":
            map[key] = `${numVal1 >> numVal2}`;
            break;
          case "LSHIFT":
            map[key] = `${numVal1 << numVal2}`;
            break;
        }
      } else {
        if (isNumber(map[val1])) valArr[0] = map[val1];
        if (isNumber(map[val2])) valArr[2] = map[val2];
        map[key] = valArr.join(" ");
      }
    },
  };

  const operation = operations[valArr.length];
  if (operation) operation();
}

export type SignalMap = Record<string, string>;
