var longestCommonSubsequence = function (text1, text2) {
    const m = text1.length;
    const n = text2.length;

    // Create a 2D array to store the lengths of common subsequences
    const dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }

    // Fill the 2D array with the lengths of common subsequences
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            }
        }
    }

    // Retrieve the longest common subsequence
    let i = m;
    let j = n;
    const result = [];
    while (i > 0 && j > 0) {
        if (text1[i - 1] === text2[j - 1]) {
            result.unshift(text1[i - 1]);
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return result.join("").length;
};

console.log(longestCommonSubsequence("abcde", "ace"));
