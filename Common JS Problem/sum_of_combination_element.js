const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const output = 10;
// const result = [[1, 6], [2, 5], [3, 4], [4, 3], [5, 2], [6, 1]];

const o = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === output) {
      o.push([arr[i], arr[j]]);
      o.push([arr[j], arr[i]]);
    }
  }
}
console.log("🚀 :====== o:", o);

// const o = [];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] === output) {
//             o.push([arr[i], arr[j]])
//         }
//         if (arr[j] + arr[i] === output) {
//             o.push([arr[j], arr[i]])
//         }
//     }

// }

// console.log("🚀 :====== o:", o)
