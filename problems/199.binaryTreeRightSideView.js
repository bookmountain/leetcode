var rightSideView = function (root) {
    const queue = [root];
    const res = [];
    while (queue.length > 0) {
        const size = queue.length;
        const rightSideNode = queue.at(-1);
        rightSideNode && res.push(rightSideNode.val);
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (node && node.left) {
                queue.push(node.left);
            }
            if (node && node.right) {
                queue.push(node.right);
            }
        }
    }

    return res;
};
