import { createHash } from "crypto";

export function getLowestNumberToMakeHashStartWithZeros(
  str: string,
  numOfZeros: number
) {
  let num = 100000;
  while (true) {
    const hash = createHash("md5")
      .update(str + num)
      .digest("hex");

    if (hash.startsWith("0".repeat(numOfZeros))) break;
    num++;
  }

  return num;
}
