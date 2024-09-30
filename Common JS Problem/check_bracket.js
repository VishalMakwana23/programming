// const str = "(a+b[]{}())";
const str = "({[}]})";

function isValidParentheses(str) {
  const openBrackets = [];
  const bracketsPair = {
    "[": "]",
    "(": ")",
    "{": "}",
  };
  for (let s of str) {
    if (bracketsPair[s]) {
      openBrackets.push(s);
    } else if (s == "}" || s == "]" || s == ")") {
      const lastPushedBracket = openBrackets.pop();
      if (s !== bracketsPair[lastPushedBracket]) {
        return false;
      }
    }
  }
  return openBrackets.length === 0;
}
console.log(isValidParentheses(str));















// function isValidParentheses() {
//   const stack = [];
//   const pairs = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };
//   for (const char of str) {
//     console.log("🚀 :====== char:", char);
//     if (pairs[char]) {
//       stack.push(char);
//     } else if (char == ")" || char == "}" || char == "]") {
//       const lastPushedBracket = stack.pop();
//       if (pairs[lastPushedBracket] !== char) {
//         return false;
//       }
//     }
//   }
//   console.log("🚀 :====== stack:", stack);
//   return stack.length === 0;
// }

// console.log("is Valid parentheses ?", isValidParentheses(str))

// ==========================
// const obj = {};
// const s = "swish";

// for (const element of s) {
//   if (obj[element]) {
//     obj[element] += 1;
//   } else {
//     obj[element] = 1;
//   }
// }
// console.log("🚀 :====== obj:", obj);

// let result = ""
// for (const element in obj) {
//     if(obj[element]==1){
//         result = element;
//         break;
//     }
// }
// console.log("🚀 :====== result:", result)
