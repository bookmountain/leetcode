var longestIncreasingPath = function (matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const dp = new Map();
    function dfs(r, c, val) {
        const key = `${r}:${c}`;
        if (r < 0 || r === rows || c < 0 || c === cols || matrix[r][c] <= val) {
            return 0;
        }
        if (dp.has(key)) {
            return dp.get(key);
        }

        let res = 1;
        res = Math.max(res, 1 + dfs(r + 1, c, matrix[r][c]));
        res = Math.max(res, 1 + dfs(r - 1, c, matrix[r][c]));
        res = Math.max(res, 1 + dfs(r, c + 1, matrix[r][c]));
        res = Math.max(res, 1 + dfs(r, c - 1, matrix[r][c]));
        dp.set(key, res);
        return res;
    }
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dfs(r, c, -1);
        }
    }

    console.table(dp);
    return Math.max(...dp.values());
};

console.log(
    longestIncreasingPath([
        [9, 9, 4],
        [6, 6, 8],
        [2, 1, 1],
    ])
);
