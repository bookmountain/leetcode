var characterReplacement = function (s, k) {
    let res = 0;
    let max = 0;
    let l = 0;
    let charMap = {};
    for (let r = 0; r <= s.length - 1; r++) {
        charMap[s[r]] = charMap[s[r]] + 1 || 1;
        max = Math.max(charMap[s[r]], max);
        if (r - l + 1 - max > k) {
            charMap[s[l]]--;
            l++;
        }
        res = Math.max(r - l + 1, res);
    }

    return res;
};

console.log(characterReplacement("AABABBA", 1));
