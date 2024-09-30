const arr1 = [1, 2, 3, 3, 4];
const arr2 = [3, 4, 3, 5, 6];


/**
 * Using JS methods
 */
// const intersectionArr = [];
// arr1.forEach(ele => {
//     if (arr2.includes(ele)) intersectionArr.push(ele);
// });
// console.log("🚀 :====== intersectionArr:", intersectionArr)

/**
 * Without JS method
 */
const intersectionArr = [];
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j] && !intersectionArr.includes(arr1[i])) {
            intersectionArr.push(arr1[i])
            // continue
            break;
        }
    }
}
console.log("🚀 :====== intersectionArr:", intersectionArr)
