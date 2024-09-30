const arr = [2, 5, 7, 9, 14];

let start = 0;
let end = arr.length - 1;
let position = undefined;
let find = 5;

while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log("🚀 :====== mid:", mid);
    if (arr[mid] == find) {
        position = mid; 
        break;
    } else if (find > arr[mid]) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log("🚀 :====== position:", position)