import { getMap, isNumber, updateMapValue } from "./common";

const map = getMap();
while (!isNumber(map["a"])) {
  for (const key in map) {
    updateMapValue(map, key);
  }
}
console.log(map["a"]);
