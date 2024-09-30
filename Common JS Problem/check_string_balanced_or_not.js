// Balanced string in javascript

function isBalanced(str) {
  const stack = [];

  for (let char of str) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.length === 0) {
        return false;
      }

      const top = stack.pop();
      if (
        (char === ")" && top !== "(") ||
        (char === "]" && top !== "[") ||
        (char === "}" && top !== "{")
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isBalanced("()")); // true
console.log(isBalanced("(}")); // false
console.log(isBalanced("({[]})")); // true
console.log(isBalanced("({[}])")); // false
