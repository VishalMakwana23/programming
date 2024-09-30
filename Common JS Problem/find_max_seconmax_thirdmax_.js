// find max, scond max, third max without using inbuilt function

const arr = [1, 2, 90, 10, 20, 7, 6, 52, 63, 85, 84];

let max = arr[0];
let secondMax = 0;
let thirdMax = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    thirdMax = secondMax;
    secondMax = max;
    max = arr[i];
  } else if (arr[i] > secondMax && arr[i] < max) {
    thirdMax = secondMax;
    secondMax = arr[i];
  } else if (arr[i] > thirdMax && arr[i] < secondMax) {
    thirdMax = arr[i];
  }

  console.log("min", max, secondMax, thirdMax);
}
