var setZeroes = function (matrix) {
    // O(1) memory solution
    const rows = matrix.length;
    const cols = matrix[0].length;
    let rowZero = false;
    // determine which rows and cols to zero out
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] === 0) {
                matrix[0][c] = 0;
                if (r === 0) {
                    rowZero = true;
                } else {
                    matrix[r][0] = 0;
                }
            }
        }
    }
    // zero out rows and cols
    for (let r = 1; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            if (matrix[r][0] === 0 || matrix[0][c] === 0) {
                matrix[r][c] = 0;
            }
        }
    }
    // zero out first col
    if (matrix[0][0] === 0) {
        for (let r = 0; r < rows; r++) {
            matrix[r][0] = 0;
        }
    }
    // zero out first row
    if (rowZero) {
        for (let c = 0; c < cols; c++) {
            matrix[0][c] = 0;
        }
    }

    return matrix;
};

console.table(
    setZeroes([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
    ])
);
