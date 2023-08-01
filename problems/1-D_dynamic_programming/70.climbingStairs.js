var climbStairs = function (n) {
    function memorizeClimb(n, memo = {}) {
        if (n === 0 || n === 1) return 1;
        if (memo[n]) return memo[n];

        memo[n] = memorizeClimb(n - 1, memo) + memorizeClimb(n - 2, memo);

        return memo[n];
    }

    return memorizeClimb(n);
};

console.log(climbStairs(3));
