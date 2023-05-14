var reverseList = function (head) {
    const reverse = (cur, prev) => {
        if (!cur) {
            return prev;
        }
        const next = cur.next;
        cur.next = prev;
        return reverse(next, cur);
    };

    return reverse(head, null);
};
