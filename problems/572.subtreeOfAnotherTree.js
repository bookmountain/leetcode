var isSubtree = function (root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;

    if (sameTree(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);

    function sameTree(s, t) {
        if (s === t) return true;
        if (s?.val !== t?.val) return false;

        return sameTree(s.left, t.left) && sameTree(s.right, t.right);
    }
};
