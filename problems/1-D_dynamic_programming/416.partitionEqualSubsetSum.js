var canPartition = function (nums) {
    const sum = nums.reduce((a, b) => a + b);
    if (sum % 2 !== 0) return false;
    const dp = new Set();
    dp.add(0);
    const target = sum / 2;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const temp = new Set();
        for (let j of dp) {
            if (j + num === target) return true;
            if (j + num < target) {
                temp.add(j + num);
            }
        }
        for (let t of temp) {
            dp.add(t);
        }
    }
    return false;
};

console.log(canPartition([1, 5, 11, 5])); // true
