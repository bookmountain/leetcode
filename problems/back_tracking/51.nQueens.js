var solveNQueens = function (n) {
    const col = new Set();
    const posDiag = new Set();
    const negDiag = new Set();
    const board = new Array(n).fill(0).map(() => new Array(n).fill("."));
    console.log(board);
    const res = [];
    function backtrack(r) {
        if (r === n) {
            res.push(board.map((row) => row.join("")));
            return;
        }
        for (let c = 0; c < n; c++) {
            if (col.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) continue;
            col.add(c);
            posDiag.add(r + c);
            negDiag.add(r - c);
            board[r][c] = "Q";
            backtrack(r + 1);
            board[r][c] = ".";
            col.delete(c);
            posDiag.delete(r + c);
            negDiag.delete(r - c);
        }
    }
    backtrack(0);
    return res;
};

console.log(solveNQueens(4));
