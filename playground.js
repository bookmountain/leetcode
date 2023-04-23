var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;

    let maxContain = (right - left) * Math.min(height[left], height[right]);
    while (left < right) {
        if (Math.min(height[left + 1], height[right]) * (right - left) > maxContain) {
        }
    }
    let width = maxR - maxL;
    let maxHeight = Math.min(height[maxL], height[maxR]);
    console.log(maxL, maxR, width, maxHeight);

    return width * maxHeight;
};

console.log(maxArea([2, 3, 4, 5, 17, 18, 6]));
