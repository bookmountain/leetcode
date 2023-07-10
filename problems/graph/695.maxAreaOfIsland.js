var maxAreaOfIsland = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = new Set();
    function dfs(r, c) {
        if (r < 0 || r === rows || c < 0 || c === cols || grid[r][c] === 0 || visited.has(`${r}-${c}`)) {
            return 0;
        }
        visited.add(`${r}-${c}`);
        return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);
    }
    let max = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            max = Math.max(max, dfs(r, c));
        }
    }
    return max;
};
