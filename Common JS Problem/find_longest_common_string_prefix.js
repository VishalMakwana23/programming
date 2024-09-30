// Longest common prefix

var longestCommonPrefix = function (strs) {
  let prefix = "";
  if (strs === null || strs.length === 0) return prefix;

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i]; // loop through all characters of the very first string.

    for (let j = 1; j < strs.length; j++) {
      // loop through all other strings in the array
      if (strs[j][i] !== char) return prefix;
    }
    prefix = prefix + char;
  }

  return prefix;
};

const arr = ["flower", "flow", "flight"];

console.log("---", longestCommonPrefix(arr));
