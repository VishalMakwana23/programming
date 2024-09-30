// * * *
// Convert number to binary
// * * *


const binaryArray = (num, currIndex = 0, total = 0, array = []) => {
  if (num > total) {
    array.push(2 ** currIndex);
    total += array.at(-1);
    return binaryArray(num, currIndex + 1, total, array);
  }
  return array;
};

const getSum = (
  binaryNumArray,
  num,
  currrIndex = 0,
  inc = 1,
  ans = null,
  pair = ""
) => {
  if (binaryNumArray[currrIndex] + binaryNumArray[currrIndex + inc] > num) {
    return getSum(binaryNumArray, num, currrIndex, inc + 1, ans, pair);
  } else if (
    binaryNumArray[currrIndex] + binaryNumArray[currrIndex + inc] <
    num
  ) {
    if (!pair) {
      pair += `${binaryNumArray[currrIndex]}-${
        binaryNumArray[currrIndex + inc]
      }-`;
    } else {
      pair += `${binaryNumArray[currrIndex + inc]}-`;
    }
    return getSum(
      [
        binaryNumArray[currrIndex] + binaryNumArray[currrIndex + inc],
        ...binaryNumArray.slice(inc + 1),
      ],
      num,
      currrIndex,
      1,
      ans,
      pair
    );
  } else {
    if (!pair) {
      pair += `${binaryNumArray[currrIndex]}-${binaryNumArray[inc]}`;
    } else {
      pair += `${binaryNumArray[inc]}`;
    }

    return pair;
  }
};

const convertNumberToBinary = (num, pair = null) => {
  const binaryNumArray = binaryArray(num);
  const indexArray = getSum([...binaryNumArray].reverse(), num).split("-");
  return binaryNumArray.reduce(
    (acc, curr) =>
      indexArray.includes(`${curr}`) ? ((acc += 1), acc) : ((acc += 0), acc),
    ""
  );
};

console.log(convertNumberToBinary(3));
