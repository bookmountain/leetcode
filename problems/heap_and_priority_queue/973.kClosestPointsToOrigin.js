var kClosest = function (points, k) {
    const map = {};
    for (let [x, y] of points) {
        const distance = Math.pow(x - 0, 2) + Math.pow(y - 0, 2);
        if (map[distance]) {
            map[distance].push([x, y]);
        } else {
            map[distance] = [[x, y]];
        }
    }
    const sorted = Object.keys(map).sort((a, b) => a - b);

    return sorted.reduce((acc, cur) => {
        map[cur].forEach((c) => {
            if (acc.length < k) {
                acc.push(c);
            }
        });
        return acc;
    }, []);
};
