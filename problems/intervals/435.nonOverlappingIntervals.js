var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervals);
    let res = 0;
    let prevEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        if (start >= prevEnd) {
            // not overlapping
            prevEnd = end;
        } else {
            // overlapping
            res += 1;
            prevEnd = Math.max(end, prevEnd);
        }
    }

    return res;
};

console.log(
    eraseOverlapIntervals([
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3],
    ])
);
