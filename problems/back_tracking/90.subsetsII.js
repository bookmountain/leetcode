var subsetsWithDup = function (nums) {
    const res = [];
    nums.sort((a, b) => a - b);
    function backtrack(i, subset) {
        if (i === nums.length) {
            res.push([...subset]);
            return;
        }
        // All subset that includes nums[i]
        subset.push(nums[i]);
        backtrack(i + 1, subset);
        subset.pop();
        // All subset that does not include nums[i]
        while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i++;
        }
        backtrack(i + 1, subset);
    }
    backtrack(0, []);

    return res;
};
