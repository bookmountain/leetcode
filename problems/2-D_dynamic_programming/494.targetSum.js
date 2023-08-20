var findTargetSumWays = function (nums, target) {
    const dp = new Map();
    function dfs(index, sum) {
        if (index === nums.length) {
            return sum === target ? 1 : 0;
        }
        const key = `${index}:${sum}`;
        if (dp.has(key)) {
            return dp.get(key);
        }
        let count = dfs(index + 1, sum + nums[index]);
        count += dfs(index + 1, sum - nums[index]);
        dp.set(key, count);
        return count;
    }
    return dfs(0, 0);
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3)); // 5
