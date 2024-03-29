var diameterOfBinaryTree = function (root) {
    let res = 0;
    function dfs(node) {
        if (node === null) {
            return 0;
        }
        let l = dfs(node.left);
        let r = dfs(node.right);

        res = Math.max(res, l + r);

        return 1 + Math.max(l, r);
    }

    dfs(root);
    return res;
};
