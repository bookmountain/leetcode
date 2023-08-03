var subsets = function (nums) {
    const res = [];
    const subset = [];
    function dfs(i) {
        if (i === nums.length) {
            res.push([...subset]);
            return;
        }
        // pick in the current value
        subset.push(nums[i]);
        dfs(i + 1);

        // not pick in the current value
        subset.pop();
        dfs(i + 1);
    }

    dfs(0);
    return res;
};
