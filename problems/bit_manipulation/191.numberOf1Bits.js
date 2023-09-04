var hammingWeight = function (n) {
    console.log(n, n & 1, n >>> 1);
    return n === 0 ? 0 : (n & 1) + hammingWeight(n >>> 1);
};

console.log(hammingWeight(0b00000000000000000000000000001011)); // 3
