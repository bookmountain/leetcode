var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode();
    let cur = dummy;
    let carry = 0;
    while (l1 || l2 || carry) {
        v1 = l1 ? l1.val : 0;
        v2 = l2 ? l2.val : 0;

        val = v1 + v2 + carry;
        carry = Math.floor(val / 10);
        val = val % 10;
        cur.next = new ListNode(val);

        cur = cur.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return dummy.next;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
