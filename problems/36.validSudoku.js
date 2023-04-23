var isValidSudoku = function (board) {
    for (let i = 0; i <= board.length - 1; i++) {
        const row = [];
        for (let n of board[i]) {
            if (n !== ".") {
                if (!row.includes(n)) {
                    row.push(n);
                } else {
                    return false;
                }
            }
        }
    }
    for (let i = 0; i <= board[0].length - 1; i++) {
        const col = [];
        for (let j = 0; j <= board.length - 1; j++) {
            const ele = board[j][i];
            if (ele !== ".") {
                if (!col.includes(ele)) {
                    col.push(ele);
                } else {
                    return false;
                }
            }
        }
    }

    for (let box = 0; box < 9; box++) {
        const matrix = [];
        for (let i = Math.floor(box / 3) * 3; i < Math.floor(box / 3) * 3 + 3; i++) {
            for (let j = (box % 3) * 3; j < (box % 3) * 3 + 3; j++) {
                const ele = board[i][j];
                if (ele !== ".") {
                    if (!matrix.includes(ele)) {
                        matrix.push(ele);
                    } else {
                        return false;
                    }
                }
            }
        }
    }

    return true;
};

console.log(
    isValidSudoku([
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ])
);
