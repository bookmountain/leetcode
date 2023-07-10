var cloneGraph = function (node) {
    const oldToNew = new Map();
    function dfs(node) {
        if (!node) return null;
        if (oldToNew.has(node)) return oldToNew.get(node);
        const copy = new Node(node.val);
        oldToNew.set(node, copy);
        for (const n of node.neighbors) {
            copy.neighbors.push(dfs(n));
        }
        return copy;
    }
    return dfs(node);
};
