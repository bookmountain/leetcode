var letterCombinations = function (digits) {
    const digitsToChar = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    };
    const res = [];
    function backtrack(i, curStr) {
        if (curStr.length === digits.length) {
            res.push(curStr);
            return;
        }
        for (let c of digitsToChar[digits[i]]) {
            backtrack(i + 1, curStr + c);
        }
    }
    if (digits.length) {
        backtrack(0, "");
    }
    return res;
};
