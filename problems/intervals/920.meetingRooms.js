var canAttendMeetings = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < intervals.length; i++) {
        const [s1, e1] = intervals[i - 1];
        const [s2, e2] = intervals[i];
        if (e1 > s2) return false;
    }
    return true;
};

console.log(
    canAttendMeetings([
        [0, 30],
        [5, 10],
        [15, 20],
    ])
);
