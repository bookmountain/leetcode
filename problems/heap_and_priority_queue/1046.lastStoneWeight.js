var lastStoneWeight = function (stones) {
    const sorted = stones.sort((a, b) => b - a);
    while (sorted.length > 1) {
        const y = sorted.shift();
        const x = sorted.shift();
        const z = y - x;
        sorted.push(z);
        sorted.sort((a, b) => b - a);
    }

    return sorted[0];
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); // 1
