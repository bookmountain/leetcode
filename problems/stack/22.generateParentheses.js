var generateParenthesis = function (n) {
    // only add open parenthesis if open < n
    // only add a closing parenthesis if closed < open
    // valid IIF open === closed === n
    const stack = [];
    const res = [];

    function backtrack(openN, closedN) {
        if (openN === closedN && closedN === n) {
            res.push(stack.join(""));
            return;
        }

        if (openN < n) {
            stack.push("(");
            backtrack(openN + 1, closedN);
            stack.pop();
        }

        if (closedN < openN) {
            stack.push(")");
            backtrack(openN, closedN + 1);
            stack.pop();
        }
    }

    backtrack(0, 0);

    return res;
};

console.log(generateParenthesis(3));
