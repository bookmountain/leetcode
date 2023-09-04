var singleNumber = function (nums) {
    let res;
    for (const n of nums) {
        res = res ^ n;
    }
    return res;
};

console.log(singleNumber([2, 2, 1])); // 1
