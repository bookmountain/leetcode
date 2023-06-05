/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    function isValid(node, left, right) {
        if (!node) {
            return true;
        }
        if (!(node.val < right && node.val > left)) {
            return false;
        }

        return isValid(node.left, left, node.val) && isValid(node.right, node.val, right);
    }

    return isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};
