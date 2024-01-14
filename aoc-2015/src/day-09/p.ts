import fs from "fs";

const data = fs.readFileSync(__dirname + "/input.txt", "utf-8").split("\n");

const distances: Record<string, Record<string, number>> = {};
for (const line of data) {
  const [source, , destination, , distance] = line.split(" ");
  distances[source] = distances[source] ? distances[source] : {};
  distances[destination] = distances[destination] ? distances[destination] : {};

  distances[source][destination] = distances[destination][source] = +distance;
}

function getMinOrMaxDistance(
  remaining: string[],
  isMax: boolean,
  lastCity = ""
) {
  let dist = isMax ? -Infinity : +Infinity;
  for (let i = 0; i < remaining.length; i++) {
    let city = remaining[i],
      distance = lastCity ? distances[lastCity][city] : 0;

    if (remaining.length > 1)
      distance += getMinOrMaxDistance(
        [...remaining.slice(0, i), ...remaining.slice(i + 1)],
        isMax,
        city
      );

    dist =
      (isMax && distance > dist) || (!isMax && distance < dist)
        ? distance
        : dist;
  }

  return dist;
}

const cities = Object.keys(distances);
console.log("P1. Min distance:", getMinOrMaxDistance(cities, false));
console.log("P2. Max distance:", getMinOrMaxDistance(cities, true));
