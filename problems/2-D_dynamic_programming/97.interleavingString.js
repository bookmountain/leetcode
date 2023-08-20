var isInterleave = function (s1, s2, s3) {
    // cache dfs
    // const dp = new Map();
    // function dfs(i, j, k) {
    //     if (i === s1.length && j === s2.length && k === s3.length) {
    //         return true;
    //     }
    //     const key = `${i}:${j}:${k}`;
    //     if (dp.has(key)) {
    //         return dp.get(key);
    //     }
    //     let result = false;
    //     if (i < s1.length && s1[i] === s3[k] && dfs(i + 1, j, k + 1)) {
    //         result = true;
    //     }
    //     if (!result && j < s2.length && s2[j] === s3[k] && dfs(i, j + 1, k + 1)) {
    //         result = true;
    //     }
    //     dp.set(key, result);
    //     return result;
    // }
    // return dfs(0, 0, 0);

    // dynamic programming
    const dp = new Array(s1.length + 1).fill(0).map(() => new Array(s2.length + 1).fill(false));
    dp[s1.length][s2.length] = true;
    for (let i = s1.length; i >= 0; i--) {
        for (let j = s2.length; j >= 0; j--) {
            if (i < s1.length && s1[i] === s3[i + j] && dp[i + 1][j]) {
                dp[i][j] = true;
            }
            if (j < s2.length && s2[j] === s3[i + j] && dp[i][j + 1]) {
                dp[i][j] = true;
            }
        }
    }
    console.table(dp);
    return dp[0][0];
};

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac")); // true
