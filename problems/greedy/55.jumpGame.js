var canJump = function (nums) {
    let goal = nums.length - 1;
    for (let i = goal; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }
    return goal === 0;
};

console.log(canJump([2, 3, 1, 1, 4]));
