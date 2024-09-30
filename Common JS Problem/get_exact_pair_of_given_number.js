
// Get Exact pair of given number

const a = [1, 2, 3, 4, 5, 0, 6];

const getPair = (arr, sum, currIndex = 0, cache = {}) => {
  if (arr.length === currIndex) return cache;
  const isPair = arr.includes(sum - arr[currIndex]);
  const pairStr = [arr[currIndex], sum - arr[currIndex]].sort().join("-");
  if (isPair && !cache[pairStr]) {
    cache[pairStr] = true;
  }
  return getPair(arr, sum, currIndex + 1, cache);
};

console.log("Exact pair of given number : ",getPair(a, 5));
