const arr = [55, 11, 35, 99, 6666, 12];

/**
 * Using JS method
 */

// const result = Math.max(...arr);
// console.log("🚀 :====== result:", result)


/**
 * Without using js method
 */
let maxNumber = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
        maxNumber = arr[i];
    }
}

console.log("🚀 :====== maxNumber:", maxNumber)