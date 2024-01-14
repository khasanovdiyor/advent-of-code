import { getMap, isNumber, updateMapValue } from "./common";

const map = getMap();
map["b"] = "3176";
while (true) {
  if (isNumber(map["a"])) break;

  for (const key in map) {
    updateMapValue(map, key);
  }
}
console.log(map["a"]);
