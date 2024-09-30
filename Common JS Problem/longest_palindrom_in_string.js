//Longest Palindrome in String
const str = "abcdefgh";
const palidromArray = [];
let longPalidromString = "";

for (let i = 0; i < str.length; i++) {
  const stringSlice = str.slice(i);
  const findChar = [...stringSlice].filter((value) => value === str[i]).length;

  if (findChar > 1) {
    for (let j = i + 1; j < str.length; j++) {
      const newStr = str.slice(i, j + 1);
      const isPlindrom = newStr === newStr.split("").reverse().join("");
      if (isPlindrom) {
        if (longPalidromString.length < newStr.length) {
          longPalidromString = newStr;
        }
        palidromArray.push(newStr);
      }
    }
  }
}
console.log("palidromString", longPalidromString || str[0]);
