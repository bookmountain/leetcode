var getSum = function (a, b) {
    const carry = (a & b) << 1;
    const sum = a ^ b;
    if (carry === 0) {
        return sum;
    }
    return getSum(sum, carry);
};

console.log(getSum(1, 2)); // 3
