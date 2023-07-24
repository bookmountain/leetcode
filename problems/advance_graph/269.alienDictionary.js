var alienOrder = function (words) {
    const adj = {};
    for (const w of words) {
        for (const c of w) {
            adj[c] = new Set();
        }
    }
    for (let i = 0; i < words.length - 1; i++) {
        const w1 = words[i];
        const w2 = words[i + 1];
        const minLen = Math.min(w1.length, w2.length);
        if (w1.length > w2.length && w1.startsWith(w2)) {
            return "";
        }
        for (let j = 0; j < minLen; j++) {
            if (w1[j] !== w2[j]) {
                adj[w1[j]].add(w2[j]);
                break;
            }
        }
    }
    const visited = {};
    const res = [];

    function dfs(c) {
        if (visited[c] === 1) {
            return true; // Cycle detected
        }
        if (visited[c] === 2) {
            return false; // Already visited and processed
        }
        visited[c] = 1; // Mark as visiting

        for (const n of adj[c]) {
            if (dfs(n)) {
                return true; // Cycle detected
            }
        }

        visited[c] = 2; // Mark as visited and processed
        res.push(c);
        return false;
    }

    for (const c in adj) {
        if (dfs(c)) {
            return "";
        }
    }
    return res.reverse().join("");
};

console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"]));
