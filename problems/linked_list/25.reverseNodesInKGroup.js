var reverseKGroup = function (head, k) {
    const dummy = new ListNode(0, head);
    let groupPrev = dummy;

    while (true) {
        let kth = getKth(groupPrev, k);
        if (!kth) {
            break;
        }
        let groupNext = kth.next;
        let prev = kth.next;
        let curr = groupPrev.next;

        while (curr !== groupNext) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        let temp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = temp;
    }

    return dummy.next;

    function getKth(curr, k) {
        while (curr && k > 0) {
            curr = curr.next;
            k -= 1;
        }
        return curr;
    }
};
