var change = function (amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (const coin of coins) {
        for (let i = 1; i < dp.length; i++) {
            if (i >= coin) {
                dp[i] += dp[i - coin];
            }
        }
        console.log(dp);
    }
    return dp[amount];

    // DYNAMIC PROGRAMMING
    // Time: O(n*m)
    // Memory: O(n*m)
    // const dp = Array.from({ length: amount + 1 }, () => Array(coins.length + 1).fill(0));
    // for (let i = 0; i <= coins.length; i++) {
    //     dp[0][i] = 1;
    // }

    // for (let a = 1; a <= amount; a++) {
    //     for (let i = coins.length - 1; i >= 0; i--) {
    //         dp[a][i] = dp[a][i + 1];
    //         if (a - coins[i] >= 0) {
    //             dp[a][i] += dp[a - coins[i]][i];
    //         }
    //     }
    // }
    // console.table(dp);
    // return dp[amount][0];
};

console.log(change(5, [1, 2, 5])); // 4
