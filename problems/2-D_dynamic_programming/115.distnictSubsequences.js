var numDistinct = function (s, t) {
    const cache = new Map();
    function dfs(i, j) {
        if (j === t.length) return 1;
        if (i === s.length) return 0;
        const key = `${i}:${j}`;
        if (cache.has(key)) return cache.get(key);
        if (s[i] === t[j]) {
            cache.set(key, dfs(i + 1, j + 1) + dfs(i + 1, j));
        } else {
            cache.set(key, dfs(i + 1, j));
        }
        return cache.get(key);
    }

    return dfs(0, 0);
};

console.log(numDistinct("rabbbit", "rabbit"));
