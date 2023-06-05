var groupAnagrams = function (strs) {
    const map = {};
    for (let str of strs) {
        const sortedStr = str.split("").sort().join("");
        if (map[sortedStr]) {
            map[sortedStr].push(str);
        } else {
            map[sortedStr] = [str];
        }
    }
    return Object.values(map);
};
