var findItinerary = function (tickets) {
    const adj = {};
    for (const [from, to] of tickets) {
        adj[from] = adj[from] || [];
        adj[from].push(to);
        adj[from].sort((a, b) => a.localeCompare(b));
    }
    console.table(adj);

    const res = ["JFK"];
    function dfs(from) {
        if (res.length === tickets.length + 1) {
            return true;
        }
        if (!adj[from]) {
            return false;
        }
        for (let i = 0; i < adj[from].length; i++) {
            const to = adj[from][i];
            console.log(from, to);
            adj[from].splice(i, 1);
            res.push(to);
            if (dfs(to)) {
                return true;
            }
            res.pop();
            adj[from].splice(i, 0, to);
        }
        return false;
    }
    dfs("JFK");
    return res;
};

console.log(
    findItinerary([
        ["JFK", "SFO"],
        ["JFK", "ATL"],
        ["SFO", "ATL"],
        ["ATL", "JFK"],
        ["ATL", "SFO"],
    ])
);
