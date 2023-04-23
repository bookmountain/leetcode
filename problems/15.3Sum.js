var threeSum = function (nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i <= nums.length - 1; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let a = i;
        let b = i + 1;
        let c = nums.length - 1;
        while (b < c) {
            if (nums[a] + nums[b] + nums[c] > 0) {
                c--;
            } else if (nums[a] + nums[b] + nums[c] < 0) {
                b++;
            } else {
                result.push([nums[a], nums[b], nums[c]]);
                b++;
                while (nums[b] === nums[b - 1] && b < c) {
                    b++;
                }
            }
        }
    }
    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
