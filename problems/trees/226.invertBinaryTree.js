var invertTree = function (root) {
    if (!root) {
        return null;
    }
    const tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    invertTree(root.left);
    invertTree(root.right);
};
