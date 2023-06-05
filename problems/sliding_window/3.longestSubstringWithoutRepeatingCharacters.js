var lengthOfLongestSubstring = function (s) {
    let charSet = new Set();
    let l = 0;
    let res = 0;

    for (let r = 0; r <= s.length - 1; r++) {
        while (charSet.has(s[r])) {
            charSet.delete(s[l]);
            l++;
        }
        charSet.add(s[r]);
        res = Math.max(res, r - l + 1);
    }

    return res;
};

console.log(lengthOfLongestSubstring("pwwkew"));
