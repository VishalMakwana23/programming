const arr = [11, 1, 2, 3, 3, 5, 7, 2];


/**
 * Using js method
 */
// const result = [...new Set(arr)];
// console.log("🚀 :====== result:", result)


const uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false
    for (let j = 0; j < uniqueArr.length; j++) {
        if(arr[i] == uniqueArr[j]){
            isDuplicate = true;
            break;
        }
        
    }
    if(!isDuplicate) uniqueArr.push(arr[i]);
}

console.log("🚀 :====== uniqueArr:", uniqueArr)