var removeNthFromEnd = function (head, n) {
    const dummy = new ListNode(undefined, head);
    let l = dummy;
    let r = head;
    while (n > 0 && r) {
        r = r.next;
        n--;
    }

    while (r) {
        r = r.next;
        l = l.next;
    }

    l.next = l.next.next;

    return dummy.next;
};
