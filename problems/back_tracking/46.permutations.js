var permute = function (nums) {
    const result = [];
    backtrack(nums, [], result);
    return result;
};

function backtrack(nums, temp, result) {
    if (temp.length === nums.length) {
        result.push([...temp]);
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (temp.includes(nums[i])) continue;
        temp.push(nums[i]);
        backtrack(nums, temp, result);
        temp.pop();
    }
}

console.log(permute([1, 2, 3]));
