var minWindow = function (s, t) {
    if (t === "") {
        return "";
    }
    const countT = {};
    const window = {};

    for (let c of t) {
        countT[c] = countT[c] + 1 || 1;
    }
    let have = 0;
    let need = Object.keys(countT).length;
    let res = [-1, -1];
    let resLen = Number.MAX_SAFE_INTEGER;

    for (let r = 0, l = 0; r < s.length; r++) {
        let c = s[r];
        window[c] = window[c] + 1 || 1;

        if (countT[c] === window[c]) {
            have++;
        }

        while (have === need) {
            // update result
            if (r - l + 1 < resLen) {
                res = [l, r];
                resLen = r - l + 1;
            }
            // pop from the left of our window
            window[s[l]]--;
            if (s[l] in countT && window[s[l]] < countT[s[l]]) {
                have--;
            }
            l++;
        }
    }
    const [l, r] = res;
    return s.slice(l, r + 1);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
