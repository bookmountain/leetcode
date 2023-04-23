var maxArea = function (height) {
    let l = 0;
    let r = height.length - 1;
    let res = 0;

    while (l < r) {
        let area = Math.min(height[l], height[r]) * (r - l);
        res = Math.max(res, area);

        if (height[l] < height[r]) {
            l++;
        } else if (height[l] > height[r]) {
            r--;
        } else {
            r--;
        }
    }

    return res;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
