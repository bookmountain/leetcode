var countBits = function (n) {
    const res = [];
    for (let i = 0; i <= n; i++) {
        res.push(hammingWeight(i));
    }
    return res;
};

var hammingWeight = function (n) {
    let res = 0;
    while (n > 0) {
        res += n % 2;
        n = n >>> 1;
    }
    return res;
};

console.log(countBits(2)); // [0,1,1]
console.log(countBits(5)); // [0,1,1,2,1,2]
