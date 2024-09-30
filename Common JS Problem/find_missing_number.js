const array = [11, 16];


// let expectedSum = 0;
// const start = array[0];
// const end = array[array.length - 1];
// for (let index = start; index <= end; index++) {
//     expectedSum += index;
// }

// // console.log("🚀 :====== expectedSum:", expectedSum)
// const arrElementSum = array.reduce((prev, curr) => prev + curr, 0);
// // console.log("🚀 :====== arrElementSum:", arrElementSum)

// const missingNumber = expectedSum - arrElementSum;
// console.log("🚀 :====== missingNumber:", missingNumber)



// let ind = array[0];
// const missingNumbers = [];
// let index = 0;
// for (let i = 0; i < array[array.length - 1] - array[0]; i++) {
//     // console.log("=====",i)
//     if (array[index] === ind) {
//         ind++;
//         index++;
//     }
//     else {
//         // i--;
//         // console.log("=====",array[i])
//         missingNumbers.push(ind);
//         ind++;
//     }
// }
// console.log("🚀 :====== missingNumbers:", missingNumbers)

const missingNumbers = [];
let ind = 0;
for (let i = array[0]; i < array[array.length - 1]; i++) {
    if (array[ind] === i) {
        ind++;
    }
    else {
        missingNumbers.push(i)
    }
}
console.log("🚀 :====== missingNumbers:", missingNumbers)