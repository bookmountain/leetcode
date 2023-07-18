var validTree = function (n, edges) {
    if (n === 0) {
        return true;
    }
    const adj = {};
    for (let i = 0; i < n; i++) {
        adj[i] = [];
    }
    for (const [n1, n2] of edges) {
        adj[n1].push(n2);
        adj[n2].push(n1);
    }
    const visited = new Set();
    function dfs(prev, i) {
        if (visited.has(i)) {
            return false;
        }
        visited.add(i);
        for (j of adj[i]) {
            if (j === prev) {
                continue;
            }
            if (!dfs(i, j)) {
                return false;
            }
        }
        return true;
    }
    return dfs(-1, 0) && visited.size === n;
};

console.log(
    validTree(5, [
        [0, 1],
        [0, 2],
        [0, 3],
        [1, 4],
    ])
);
