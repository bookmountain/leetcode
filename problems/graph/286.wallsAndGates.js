var wallsAndGates = function (rooms) {
    const rows = rooms.length;
    const cols = rooms[0].length;
    const queue = [];
    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (rooms[r][c] === 0) {
                queue.push([r, c]);
            }
        }
    }

    while (queue.length > 0) {
        const [r, c] = queue.shift();
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr < 0 || nr === rows || nc < 0 || nc === cols || rooms[nr][nc] !== 2147483647) {
                continue;
            }
            rooms[nr][nc] = rooms[r][c] + 1;
            queue.push([nr, nc]);
        }
    }

    return rooms;
};

console.log(
    wallsAndGates([
        [2147483647, -1, 0, 2147483647],
        [2147483647, 2147483647, 2147483647, -1],
        [2147483647, -1, 2147483647, -1],
        [0, -1, 2147483647, 2147483647],
    ])
);
