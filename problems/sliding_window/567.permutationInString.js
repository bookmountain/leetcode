var checkInclusion = function (s1, s2) {
    const s1Map = {};
    for (let i = 0; i <= s1.length - 1; i++) {
        s1Map[s1[i]] = s1Map[s1[i]] + 1 || 1;
    }

    let l = 0;
    for (let r = s1.length - 1; r <= s2.length - 1; r++) {
        const window = s2.split("").slice(l, r + 1);
        const windowMap = {};
        window.forEach((s) => (windowMap[s] = windowMap[s] + 1 || 1));
        if (isTheSame(s1Map, windowMap)) {
            return true;
        }
        l++;
    }
    return false;
};

function isTheSame(obj1, obj2) {
    for (s in obj1) {
        if (obj1[s] !== obj2[s]) {
            return false;
        }
    }
    return true;
}
