function diagonalDifference(matrix) {
    const n = matrix.length;
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i < n; i++) {
        primaryDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][n - i - 1];
    }

    return Math.abs(primaryDiagonal - secondaryDiagonal);
}

const matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(diagonalDifference(matrix));  // Output: 3
