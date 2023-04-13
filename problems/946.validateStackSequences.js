var validateStackSequences = function (pushed, popped) {
    const stack = [];
    let i = 0;
    for (let item of pushed) {
        stack.push(item);
        while (stack.length && stack[stack.length - 1] === popped[i]) {
            stack.pop();
            i++;
        }
    }
    return !stack.length;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
