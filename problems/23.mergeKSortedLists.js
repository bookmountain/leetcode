var mergeKLists = function (lists) {
    if (!lists && lists.length === 0) {
        return [];
    }

    while (lists.length > 1) {
        let mergedLists = [];

        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i];
            let l2 = i + 1 < lists.length ? lists[i + 1] : null;
            mergedLists(mergeList(l1, l2));
        }
    }
    return lists[0];

    function mergeList(l1, l2) {
        const head = new ListNode();
        let tail = head;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }

        tail.next = l1 || l2;
        return head.next;
    }
};
