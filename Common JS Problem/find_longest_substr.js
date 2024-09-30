const str = "abccdefghiijkl";
// const output = "cdefghi";

const arr = [];
let subStr = "";
for (let i = 0; i < str.length; i++) {
    const element = str[i];
    for (let j = 0; j < subStr.length; j++) {
        const subStrElement = subStr[j];
        if(subStrElement== element){
            arr.push(subStr);
            subStr = ""
        }
    }
    subStr+= element;
    if(i == str.length-1) arr.push(subStr);
    // console.log("🚀 :====== element:", element)
}

// console.log("🚀 :====== subStr:", subStr)
console.log("🚀 :====== arr:", arr)



























// const result = [];
// let subStr = "";
// for (let i = 0; i < str.length; i++) {
//   for (let j = 0; j < subStr.length; j++) {
//     const element = subStr[j];
//     if (str[i] === element) {
//       result.push(subStr);
//       console.log("🚀 :====== ele:", subStr);
//       subStr = "";
//     }
//   }
//   subStr += str[i];
//   if (i == str.length - 1) result.push(subStr);
// }

// console.log("🚀 :====== result:", result);

// let longSubStr = result[0];
// let longSubStrLength = result[0].length;
// for (let i = 0; i < result.length; i++) {
//   if (longSubStrLength < result[i].length) {
//     longSubStrLength = result[i].length;
//     longSubStr = result[i];
//   }
// }

// console.log("🚀 :====== longSubStr:", longSubStr);
