var minCostClimbingStairs = function (cost) {
    const arr = [...cost];
    arr.push(0);
    for (let i = arr.length - 3; i >= 0; i--) {
        arr[i] += Math.min(arr[i + 1], arr[i + 2]);
    }
    return Math.min(arr[0], arr[1]);
};

console.log(minCostClimbingStairs([10, 15, 20]));
