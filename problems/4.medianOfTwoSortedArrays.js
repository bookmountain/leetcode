var findMedianSortedArrays = function (nums1, nums2) {
    const arr = nums1.concat(nums2).sort((a, b) => a - b);
    let median = (0 + arr.length) / 2;
    if (median % 1 === 0.5) {
        return arr[Math.floor(median)];
    } else {
        const m1 = arr[median - 1];
        const m2 = arr[median];

        return (m1 + m2) / 2;
    }
};

console.log(findMedianSortedArrays([-2, -1], [3]));
