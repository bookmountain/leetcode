var carFleet = function (target, position, speed) {
    const pairs = {};
    for (let i = 0; i <= position.length - 1; i++) {
        pairs[position[i]] = speed[i];
    }

    const stack = [];
    for (const [p, s] of Object.entries(pairs).sort((a, b) => b[0] - a[0])) {
        stack.push((target - p) / s);
        if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
            stack.pop();
        }
    }

    return stack.length;
};

carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]);
