const symbol = "*";
// 1)
// ========================================
// *
// **
// ***
// ****
// *****
// -----------------------------------------
// let str = "";
// for (let i = 0; i < 5; i++) {
//   str += symbol;
//   console.log(str);
// }
// -----------------------------------------

// 2)
// ========================================
// *****
// ****
// ***
// **
// *
// -----------------------------------------
// for (let i = 5; i > 0; i--) {
//   let str = "";
//   for (let j = 0; j < i; j++) {
//     str += symbol;
//   }
//   console.log(str);
// }
// -----------------------------------------

// 3)
// ========================================
//     *
//    **
//   ***
//  ****
// *****
// -----------------------------------------
let n = 5;
// for (let i = 0; i < n; i++) {
//     let str = "";
//   str += " ".repeat(n - i);
//   str += symbol.repeat(i+1);
//   console.log(str);
// }

for (let i = 0; i < n; i++) {
  let str = "";
  for (let j = 0; j < n-i - 1; j++) {
    str += " ";
  }
  for (let k = 0; k < i; k++) {
    str+=symbol
  }
  str += symbol;
  console.log("🚀 :====== str:", JSON.stringify(str, null, 2));
}
// -----------------------------------------

// 3)
// ========================================
// ****
// *  *
// *  *
// ****

// *
// ***
// *****
// *******
// *********

// *********
// *******
// *****
// ***
//  *

// *
// ***
// *****
// ***
// *

// *****
// ***
// *
// ***
// *****