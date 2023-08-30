var insert = function (intervals, newInterval) {
    const res = [];

    for (let i = 0; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        const [newStart, newEnd] = newInterval;
        if (newEnd < start) {
            res.push(newInterval);
            res.push(...intervals.slice(i));
            return res;
        } else if (newStart > end) {
            res.push(intervals[i]);
        } else {
            newInterval = [Math.min(newStart, start), Math.max(newEnd, end)];
        }
    }

    res.push(newInterval);
    return res;
};

console.log(
    insert(
        [
            [1, 3],
            [6, 9],
        ],
        [2, 5]
    )
);

console.log(
    insert(
        [
            [1, 2],
            [3, 5],
            [6, 7],
            [8, 10],
            [12, 16],
        ],
        [4, 8]
    )
);
