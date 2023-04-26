var isValid = function (s) {
    const stack = [];
    for (let i = 0; i <= s.length - 1; i++) {
        if (s[i] === "[") {
            stack.push("]");
        } else if (s[i] === "(") {
            stack.push(")");
        } else if (s[i] === "{") {
            stack.push("}");
        } else if (!stack.includes(s[i])) {
            return false;
        }

        if (s[i] === stack[stack.length - 1]) {
            stack.pop();
        }
    }

    return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("]"));
