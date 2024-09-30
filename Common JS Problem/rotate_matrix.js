const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


const result = function rotateMatrix(matrix, rotation) {
    const result = [];
    if (rotation === 0) return matrix;
    for (let i = 0; i < matrix.length; i++) {
        const elementArr = [];
        for (let j = 0; j < matrix[i].length; j++) {
            elementArr.push(matrix[j][i]);
        }
        result.push(elementArr.reverse())
    }
    if (rotation > 1) return rotateMatrix(result, rotation - 1)
    return result;
}

console.log("🚀 :====== result:", result(matrix, 1))