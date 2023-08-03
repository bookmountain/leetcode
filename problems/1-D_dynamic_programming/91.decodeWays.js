var numDecodings = function (s) {
    const dp = {
        [s.length]: 1,
    };
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === "0") {
            dp[i] = 0;
            continue;
        }
        dp[i] = dp[i + 1];
        if (i < s.length - 1 && (s[i] === "1" || (s[i] === "2" && s[i + 1] <= "6"))) {
            dp[i] += dp[i + 2];
        }
    }
    return dp[0];
};

console.log(numDecodings("226")); // 3
