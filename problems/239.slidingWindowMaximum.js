var maxSlidingWindow = function (nums, k) {
    const res = [];
    const deque = [s];
    let l = 0;
    let r = 0;

    while (r < nums.length) {
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[r]) {
            deque.pop();
        }
        deque.push(r);

        if (l > deque[0]) {
            deque.shift();
        }

        if (r + 1 >= k) {
            res.push(nums[deque[0]]);
            l += 1;
        }

        r += 1;
    }
    return res;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
