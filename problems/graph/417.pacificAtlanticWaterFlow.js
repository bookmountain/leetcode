var pacificAtlantic = function (heights) {
    const rows = heights.length;
    const cols = heights[0].length;
    const pac = new Set();
    const atl = new Set();

    function dfs(r, c, visited, previousHeight) {
        if (r < 0 || c < 0 || r === rows || c === cols || heights[r][c] < previousHeight || visited.has(`${r}-${c}`)) {
            return;
        }
        visited.add(`${r}-${c}`);
        dfs(r + 1, c, visited, heights[r][c]);
        dfs(r - 1, c, visited, heights[r][c]);
        dfs(r, c + 1, visited, heights[r][c]);
        dfs(r, c - 1, visited, heights[r][c]);
    }
    for (let c = 0; c < cols; c++) {
        dfs(0, c, pac, heights[0][c]);
        dfs(rows - 1, c, atl, heights[rows - 1][c]);
    }

    for (let r = 0; r < rows; r++) {
        dfs(r, 0, pac, heights[r][0]);
        dfs(r, cols - 1, atl, heights[r][cols - 1]);
    }
    const res = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (pac.has(`${r}-${c}`) && atl.has(`${r}-${c}`)) {
                res.push([r, c]);
            }
        }
    }
    return res;
};
