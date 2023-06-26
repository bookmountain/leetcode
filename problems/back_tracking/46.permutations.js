var permute = function (nums) {
    const res = [];

    if (nums.length === 1) {
        return [[...nums]];
    }

    for (let i = 0; i < nums.length; i++) {
        const n = nums.shift();
        const perms = permute(nums);

        for (const perm of perms) {
            res.push(perm.concat(n));
        }
        nums.push(n);
    }
    return res;
};

console.log(permute([1, 2, 3]));
