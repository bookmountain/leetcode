var orangesRotting = function (grid) {
    const queue = [];
    let time = 0;
    let fresh = 0;
    const rows = grid.length;
    const cols = grid[0].length;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                fresh += 1;
            }
            if (grid[r][c] === 2) {
                queue.push([r, c]);
            }
        }
    }
    // bfs the queue and count the time
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    while (queue.length > 0 && fresh > 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const [r, c] = queue.shift();
            for (const [dr, dc] of directions) {
                const nr = dr + r;
                const nc = dc + c;
                if (nr < 0 || nr === rows || nc < 0 || nc === cols || grid[nr][nc] !== 1) {
                    continue;
                }
                grid[nr][nc] = 2;
                queue.push([nr, nc]);
                fresh -= 1;
            }
        }
        time += 1;
    }

    if (fresh === 0) {
        return time;
    } else {
        return -1;
    }
};

console.log(
    orangesRotting([
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1],
    ])
);
