var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const sMap = {};
    for (let char of s.split("")) {
        sMap[char] = sMap[char] ? sMap[char] + 1 : 1;
    }

    const tMap = {};
    for (let char of t.split("")) {
        tMap[char] = tMap[char] ? tMap[char] + 1 : 1;
    }
    for (key in sMap) {
        if (sMap[key] !== tMap[key]) {
            return false;
        }
    }

    return true;
};

console.log(isAnagram("anagram", "nagaram"));
