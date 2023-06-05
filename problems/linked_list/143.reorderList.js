var reorderList = function (head) {
    // find the middle
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse the second half
    let second = slow.next;
    let prev = (slow.next = null);
    while (second) {
        const tmp = second.next;
        second.next = prev;
        prev = second;
        second = tmp;
    }

    // merge two fist half & second half to a list

    let first = head;
    // prev will be reversed to the head of second half
    second = prev;
    while (second) {
        const tmp1 = first.next;
        const tmp2 = second.next;
        first.next = second;
        second.next = tmp1;
        first = tmp1;
        second = tmp2;
    }
};
