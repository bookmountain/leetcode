var isMatch = function (s, p) {
    // Top-down memorization
    const cache = new Map();
    function dfs(i, j) {
        const key = `${i}:${j}`;
        if (cache.has(key)) return cache.get(key);
        if (i >= s.length && j >= p.length) return true;
        if (j >= p.length) return false;
        const match = i < s.length && (s[i] === p[j] || p[j] === ".");
        if (j + 1 < p.length && p[j + 1] === "*") {
            const notUse = dfs(i, j + 2);
            const use = match && dfs(i + 1, j);
            const value = notUse || use;
            cache.set(key, value);
            return value;
        }
        if (match) {
            const value = dfs(i + 1, j + 1);
            cache.set(key, value);
            return value;
        }
        cache.set(key, false);
        return false;
    }

    return dfs(0, 0);
};
