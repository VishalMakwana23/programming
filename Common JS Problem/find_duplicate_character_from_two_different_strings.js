// - find duplicate character in two different string

const str1 = "abcds";
const str2 = "abcd";


// const rec = (a, ans = "") => {
//   if (a.length) {
//     const stoa = a.split("");
//     const first = stoa.filter((i) => i === a[0]);
//     if (first.length > 1) {
//       return rec(stoa.filter((m) => m !== a[0]).join(""), ans);
//     } else {
//       ans += a[0];
//       return rec(stoa.filter((m) => m !== a[0]).join(""), ans);
//     }
//   }
//   return ans;
// };

// const ab = str1 === str2 ? "" : rec(str1 + str2);

// console.log(ab);


const string1 = "abcd";
const string2 = "abcde";
const string = str1.concat(str2);

var arr = string.split("");
let output = arr
  .filter((e) => {
    return arr.indexOf(e) === arr.lastIndexOf(e);
  })
  .join("");

console.log(output);
