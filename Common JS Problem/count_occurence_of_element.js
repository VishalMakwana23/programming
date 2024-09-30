const arr = ['a', 'b', 1, 'b', 1, 'c', 2];


const result = arr.reduce((prev, curr) => {
    if (prev[curr]) {
        prev[curr] += 1;
    } else {
        prev[curr] = 1;
    }
    return prev;
}, {})
console.log("🚀 :====== result:", result)