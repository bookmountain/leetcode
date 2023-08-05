var maxProduct = function (nums) {
    let res = nums[0];
    let min = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const cur = nums[i];
        if (cur < 0) {
            [min, max] = [max, min];
        }
        max = Math.max(cur, max * cur);
        min = Math.min(cur, min * cur);
        res = Math.max(res, max);
    }
    return res;
};

console.log(maxProduct([2, 3, -2, 4]));
