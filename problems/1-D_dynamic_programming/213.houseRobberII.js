var rob = function (nums) {
    function dp(houses) {
        let rob1 = 0;
        let rob2 = 0;
        for (let i = 0; i < houses.length; i++) {
            const temp = Math.max(rob1 + houses[i], rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        return rob2;
    }

    if (nums.length === 1) {
        return nums[0];
    }

    const max1 = dp(nums.slice(1));
    const max2 = dp(nums.slice(0, nums.length - 1));

    return Math.max(max1, max2);
};
