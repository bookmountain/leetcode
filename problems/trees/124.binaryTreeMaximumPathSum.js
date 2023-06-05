var maxPathSum = function (root) {
    let res = root.val;
    // return max path sum without split
    function dfs(root) {
        if (!root) {
            return 0;
        }

        let leftMax = dfs(root.left);
        let rightMax = dfs(root.right);
        leftMax = Math.max(leftMax, 0);
        rightMax = Math.max(rightMax, 0);

        // compute max path sum WITH split
        res = Math.max(res, root.val + leftMax + rightMax);

        return root.val + Math.max(leftMax, rightMax);
    }

    dfs(root);

    return res;
};
