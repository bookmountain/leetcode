class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    // add node to the tail
    append(item) {
        let node = new Node(item);

        // if first node
        if (!this.head) {
            this.head = node;
        } else {
            // else find the tail
            let tail = this.head;
            while (tail.next !== null) {
                tail = tail.next;
            }
            tail.next = node;
        }
        this.length++;
    }

    // remove node
    removeAt(index) {
        // check if index is qualified
        if (index < 0 || index > this.length) return null;
        let current = this.head,
            prev = null,
            idx = 0;
        // if first node
        if (index === 0) {
            // point the head to next node
            this.head = current.next;
        } else {
            // else find the index
            while (idx++ < index) {
                prev = current; // set prev node as current
                current = current.next; // and move current to the next node
            }
            // index found, link prev.next & current.next
            prev.next = current.next;
        }
        this.length--;
    }

    insertAt(index, item) {
        // check if index is qualified
        if (index < 0 || index > this.length) return null;
        let node = new Node(item);
        let current = this.head,
            prev = null,
            idx = 0;
        // if first node
        if (index === 0) {
            this.head = node;
            node.next = current;
        } else {
            while (idx++ < index) {
                prev = current;
                current = current.next;
            }
            prev.next = node;
            node.next = current;
        }
        this.length++;
    }
}

class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}
