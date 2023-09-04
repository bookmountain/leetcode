var missingNumber = function (nums) {
    let complete = 0;
    for (let i = 0; i < nums.length + 1; i++) {
        complete += i;
    }
    let res = 0;
    for (const n of nums) {
        res += n;
    }

    return complete - res;
};

console.log(missingNumber([3, 0, 1])); // 2
