//const ops = ["5", "-2", "4", "C", 'D', "9", "+", "+"]
const ops = ["5", "-2", "C", "D", "+"];

const ans = [];
let total = 0;

for (let i = 0; i < ops.length; i++) {
  if (!isNaN(+ops[i])) {
    total += +ops[i];
    ans.push(+ops[i]);
  } else if (ops[i] === "C") {
    const pop = ans.pop();
    total -= pop;
  } else if (ops[i] === "D") {
    total += 2 * ans.at(-1);
    ans.push(2 * ans.at(-1));
  } else {
    const addition = ans.at(-2) + ans.at(-1);
    total += addition;
    ans.push(addition);
  }
}
console.log(total);
