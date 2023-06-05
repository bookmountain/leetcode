var search = function (nums, target) {
    if (nums.length === 1 && nums[0] === target) {
        return 0;
    }
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) {
            return mid;
        }

        // left sorted portion
        if (nums[l] <= nums[mid]) {
            if (target > nums[mid] || target < nums[l]) {
                // search right portion
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        } else {
            // right sorted portion
            if (target < nums[mid] || target > nums[r]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
    }

    return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
