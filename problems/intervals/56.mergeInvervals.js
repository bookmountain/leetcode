var merge = function (intervals) {
    const res = [];

    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < intervals.length; i++) {
        const [start, end] = intervals[i];

        if (res.length === 0) {
            res.push(intervals[i]);
        } else {
            const [prevStart, prevEnd] = res[res.length - 1];
            if (start <= prevEnd) {
                res[res.length - 1] = [prevStart, Math.max(prevEnd, end)];
            } else {
                res.push(intervals[i]);
            }
        }
    }

    return res;
};

console.log(
    merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
    ])
);
