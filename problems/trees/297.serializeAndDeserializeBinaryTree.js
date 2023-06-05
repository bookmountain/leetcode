var serialize = function (root) {
    const res = [];

    function dfs(node) {
        if (!node) {
            res.push("N");
            return;
        }
        res.push(String(node.val));
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return res.join(",");
};

var deserialize = function (data) {
    const vals = data.split(",");
    let i = 0;

    function dfs() {
        if (vals[i] === "N") {
            i += 1;
            return;
        }
        const node = new TreeNode(Number(vals[i]));
        i += 1;
        node.left = dfs();
        node.right = dfs();

        return node;
    }

    return dfs();
};
