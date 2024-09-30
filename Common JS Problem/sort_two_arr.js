const arr1 = [4, 2, 6, 1];
const arr2 = [55, 22, 66, 12];

/**
 * Using JS method
 */

// const result = arr1.concat(arr2).sort((a,b)=>a-b);
// console.log("🚀 :====== result:", result)


/**
 * Without Js method
 */

const mergedArr = new Array(arr1.length + arr2.length);
for (let i = 0; i < arr1.length; i++) {
    mergedArr[i] = arr1[i];
}
for (let i = 0; i < arr2.length; i++) {
    mergedArr[arr1.length + i] = arr2[i];
}
console.log("🚀 :====== mergedArr:", mergedArr)


for (let i = 0; i < mergedArr.length; i++) {
    for (let j = i + 1; j < mergedArr.length; j++) {
        if (mergedArr[i] > mergedArr[j]) {
            const temp = mergedArr[i];
            mergedArr[i] = mergedArr[j];
            mergedArr[j] = temp;
        }
    }
}

console.log("🚀 :====== sorted result:", mergedArr)