var minMeetingRooms = function (intervals) {
    const start = intervals.map((i) => i[0]).sort((a, b) => a - b);
    const end = intervals.map((i) => i[1]).sort((a, b) => a - b);
    let res = 0;
    let count = 0;
    let s = 0;
    let e = 0;
    while (s < intervals.length) {
        if (start[s] < end[e]) {
            count += 1;
            s += 1;
        } else {
            count -= 1;
            e += 1;
        }
        res = Math.max(res, count);
    }

    return res;
};

console.log(
    minMeetingRooms([
        [0, 30],
        [5, 10],
        [15, 20],
    ])
);
