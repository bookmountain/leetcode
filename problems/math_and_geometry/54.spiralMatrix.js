var spiralOrder = function (matrix) {
    const res = [];
    let left = 0;
    let right = matrix[0].length;
    let top = 0;
    let bottom = matrix.length;
    while (left < right && top < bottom) {
        for (let i = left; i < right; i++) {
            res.push(matrix[top][i]);
        }
        top += 1;
        for (let i = top; i < bottom; i++) {
            res.push(matrix[i][right - 1]);
        }
        right -= 1;
        if (left < right && top < bottom) {
            for (let i = right - 1; i >= left; i--) {
                res.push(matrix[bottom - 1][i]);
            }
            bottom -= 1;
            for (let i = bottom - 1; i >= top; i--) {
                res.push(matrix[i][left]);
            }
            left += 1;
        }
    }
    return res;
};

console.log(
    spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
);
