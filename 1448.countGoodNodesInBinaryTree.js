var goodNodes = function (root) {
    let counter = 0;

    function dfs(node, max) {
        if (!node) {
            return;
        }
        if (node.val >= max) {
            counter += 1;
        }
        max = Math.max(max, node.val);
        dfs(node.left, max);
        dfs(node.right, max);
    }
    dfs(root, root.val);

    return counter;
};
