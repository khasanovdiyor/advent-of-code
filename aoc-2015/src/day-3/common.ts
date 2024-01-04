export function move(point: [number, number], dir: string) {
  if (dir === "^") {
    point[1]++;
  } else if (dir === "v") {
    point[1]--;
  } else if (dir === ">") {
    point[0]++;
  } else {
    point[0]--;
  }
}
