var dailyTemperatures = function (temperatures) {
    const res = new Array(temperatures.length).fill(0);
    const stack = [0];

    for (let i = 1; i <= temperatures.length - 1; i++) {
        if (temperatures[i] > temperatures[i - 1]) {
            res[i - 1] = 1;
            stack.pop();
            while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
                res[stack[stack.length - 1]] = i - stack[stack.length - 1];
                stack.pop();
            }
        }
        stack.push(i);
    }

    return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
