var maxSubArray = function (nums) {
    let max = nums[0];
    let sum = 0;
    for (n of nums) {
        if (sum < 0) {
            sum = 0;
        }
        sum += n;
        max = Math.max(max, sum);
    }

    return max;
};

console.log(maxSubArray([-2, -1, -3]));
