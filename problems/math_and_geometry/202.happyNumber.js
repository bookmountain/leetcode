var isHappy = function (n) {
    const visited = new Set();
    while (n !== 1) {
        let sum = 0;
        while (n > 0) {
            sum += (n % 10) ** 2;
            n = Math.floor(n / 10);
        }

        if (visited.has(sum)) {
            return false;
        }
        visited.add(sum);
        n = sum;
    }

    return true;
};
console.log(isHappy(19));
