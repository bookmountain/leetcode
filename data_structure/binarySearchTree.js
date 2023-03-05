class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.path = "";
        this.queue = [];
    }

    treeInsert(z) {
        let y = null;
        let x = this.root;
        while (x !== null) {
            y = x;
            if (z.key < x.key) {
                x = x.left;
            } else {
                x = x.right;
            }
        }

        if (y == null) {
            this.root = z;
        } else if (z.key < y.key) {
            y.left = z;
        } else {
            y.right = z;
        }
    }

    searchRecursively(n, key) {
        if (n === null || key === n.key) {
            return n;
        }

        if (key < n.key) {
            return this.searchRecursively(n.left, key);
        } else {
            return this.searchRecursively(n.right, key);
        }
    }

    searchIteratively(n, key) {
        while (n !== null && key !== n.key) {
            if (key < n.key) {
                n = n.left;
            } else {
                n = n.right;
            }
        }

        return n;
    }

    preOrder(n) {
        if (n !== null) {
            this.path += n.key + " ";
            this.preOrder(n.left);
            this.preOrder(n.right);
        }
    }

    inOrder(n) {
        if (n !== null) {
            this.inOrder(n.left);
            this.path += n.key + " ";
            this.inOrder(n.right);
        }
    }

    postOrder(n) {
        if (n !== null) {
            this.postOrder(n.left);
            this.postOrder(n.right);
            this.path += n.key + " ";
        }
    }

    bftt(n) {
        if (n !== null) {
            this.queue.push(n);
            for (let i = 0; i < this.queue.length; i++) {
                let node = this.queue[i];
                if (node.left !== null) {
                    this.queue.push(node.left);
                }
                if (node.right !== null) {
                    this.queue.push(node.right);
                }
            }
        }
    }
}

let bst = new BinarySearchTree();
bst.treeInsert(new Node(15));
bst.treeInsert(new Node(6));
bst.treeInsert(new Node(5));
bst.treeInsert(new Node(1));
bst.treeInsert(new Node(13));
bst.treeInsert(new Node(-7));
bst.treeInsert(new Node(3));

console.log(bst.searchIteratively(bst.root, 6));
