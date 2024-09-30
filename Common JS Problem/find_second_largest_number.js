const arr = [55, 22, 43, 10, 100, 2];


/**
 * With JS method
 */
// 1)
// const maxNumber = Math.max(...arr);
// console.log("🚀 :====== maxNumber:", maxNumber)

// 2) 
// const descArr = arr.sort((a, b) => b - a);
// console.log("🚀 :====== descArr:", descArr)
// const maxNumber = descArr[1];
// console.log("🚀 :====== maxNumber:", maxNumber)

/**
 * Without using JS method
 */

let maxNumber = arr[0];
let secondLarge = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (maxNumber <= arr[i]) {
        secondLarge = maxNumber;
        maxNumber = arr[i];
    }
}
console.log("🚀 :====== maxNumber:", maxNumber)
console.log("🚀 :====== secondLarge:", secondLarge)