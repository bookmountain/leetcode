var maxProfit = function (prices) {
    // State: buying or selling
    // If buy -> i + 1
    // If sell -> i + 2
    const dp = new Map(); // key = [i, state] value = max profit
    function getStateKey(i, buying) {
        return `${i}-${buying}`;
    }
    function dfs(i, buying) {
        if (i >= prices.length) return 0;
        const stateKey = getStateKey(i, buying);
        if (dp.has(stateKey)) return dp.get(stateKey);
        const cooldown = dfs(i + 1, buying);
        if (buying) {
            const buy = dfs(i + 1, !buying) - prices[i];
            dp.set(stateKey, Math.max(buy, cooldown));
        } else {
            const sell = dfs(i + 2, !buying) + prices[i];
            dp.set(stateKey, Math.max(sell, cooldown));
        }
        return dp.get(stateKey);
    }
    return dfs(0, true);
};

console.log(maxProfit([1, 2, 3, 0, 2])); // 3
