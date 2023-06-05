var findMin = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    let l = 0;
    let r = nums.length - 1;
    let mid = Math.floor((l + r) / 2);

    if (nums[r] > nums[l]) {
        return nums[l];
    }

    while (r >= l) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }

        if (nums[mid] < nums[mid - 1]) {
            return nums[mid];
        }

        if (nums[mid] > nums[0]) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
};
