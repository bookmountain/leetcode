var checkValidString = function (s) {
    let leftMin = 0;
    let leftMax = 0;

    for (const c of s) {
        if (c === "(") {
            leftMin = leftMin + 1;
            leftMax = leftMax + 1;
        } else if (c === ")") {
            leftMin = leftMin - 1;
            leftMax = leftMax - 1;
        } else {
            leftMin = leftMin - 1;
            leftMax = leftMax + 1;
        }
        if (leftMax < 0) {
            return false;
        }
        if (leftMin < 0) {
            leftMin = 0;
        }
    }

    return true;
};

console.log(checkValidString("(*))"));
