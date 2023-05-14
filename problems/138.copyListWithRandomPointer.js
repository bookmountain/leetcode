var copyRandomList = function (head) {
    const oldToCopy = new Map();
    let cur = head;

    // First pass: create copy nodes and store mapping
    while (cur) {
        const copy = new Node(cur.val);
        oldToCopy.set(cur, copy);
        cur = cur.next;
    }

    // Second pass: connect copy nodes' next and random pointers
    cur = head;
    while (cur) {
        const copy = oldToCopy.get(cur);
        copy.next = oldToCopy.get(cur.next);
        copy.random = oldToCopy.get(cur.random);
        cur = cur.next;
    }

    return oldToCopy.get(head);
};
