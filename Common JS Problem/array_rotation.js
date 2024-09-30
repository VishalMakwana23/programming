// array rotation

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

7, 4, 1;
8, 5, 2;
9, 6, 3;

function transform(num, arr, ans = []) {
  const temp = [];
  if (num <= 0) {
    return ans;
  }
  for (let i = 0; i < arr.length; i++) {
    const check = [];

    for (let j = 0; j < arr[i].length; j++) {
      check[j] = arr[j][i];
    }
    const res = check.reverse();
    temp.push(res);
  }
  ans = temp;
  return transform(num - 1, temp, ans);
}

console.log(transform(2, arr));

// ------------ 2nd solution

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

7, 4, 1;
8, 5, 2;
9, 6, 3;

const ans = matrix[0]
  .map((val, index) =>
    matrix.map((row) => row[row.length - 1 - index]).reverse()
  )
  .reverse();

console.log(ans);
