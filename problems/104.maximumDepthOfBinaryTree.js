var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    // Recursive DFS
    // return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));

    // BFS
    // let level = 0;
    // let q = [root];
    // while (q.length > 0) {
    //     const size = q.length;
    //     for (let i = 0; i < size; i++) {
    //         const node = q.shift();
    //         if (node.left) {
    //             q.push(node.left);
    //         }
    //         if (node.right) {
    //             q.push(node.right);
    //         }
    //     }
    //     level += 1;
    // }

    // return level;

    // Iterative DFS
    const stack = [{ node: root, depth: 1 }];
    let res = 1;
    while (stack.length > 0) {
        const { node, depth } = stack.pop();

        if (node) {
            res = Math.max(res, depth);
            stack.push({ node: node.left, depth: depth + 1 });
            stack.push({ node: node.right, depth: depth + 1 });
        }
    }

    return res;
};
