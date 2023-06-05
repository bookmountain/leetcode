var evalRPN = function (tokens) {
    const stack = [];
    for (t of tokens) {
        if (t === "+") {
            stack.push(stack.pop() + stack.pop());
        } else if (t === "-") {
            const a = stack.pop();
            const b = stack.pop();
            stack.push(b - a);
        } else if (t === "*") {
            stack.push(stack.pop() * stack.pop());
        } else if (t === "/") {
            const a = stack.pop();
            const b = stack.pop();
            let result = b / a < 0 ? Math.ceil(b / a) : Math.floor(b / a);
            stack.push(result);
        } else {
            stack.push(+t);
        }
    }
    return stack[0];
};
