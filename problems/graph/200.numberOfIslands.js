var numIslands = function (grid) {
    if (grid.length === 0) {
        return 0;
    }
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = new Array(rows).fill(0).map(() => new Array(cols).fill(false));
    console.log(visited);
    let count = 0;

    function bfs(r, c) {
        const queue = [];
        visited[r][c] = true;
        queue.push([r, c]);
        while (queue.length > 0) {
            const [row, col] = queue.shift();
            const directions = [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1],
            ];
            for (const [dr, dc] of directions) {
                const nr = row + dr;
                const nc = col + dc;
                if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === "1" && visited[nr][nc] === false) {
                    queue.push([nr, nc]);
                    visited[nr][nc] = true;
                }
            }
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1" && visited[r][c] === false) {
                bfs(r, c);
                count++;
            }
        }
    }

    return count;
};

console.log(
    numIslands([
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"],
    ])
);
