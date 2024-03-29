var uniquePaths = function (m, n) {
    let row = new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        let newRow = new Array(n).fill(1);
        for (let j = n - 2; j >= 0; j--) {
            newRow[j] = newRow[j + 1] + row[j];
        }
        row = newRow;
    }
    return row[0];
};

console.log(uniquePaths(3, 7)); // 28
