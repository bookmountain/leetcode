var findKthLargest = function (nums, k) {
    let index = nums.length - k;
    function quickSelect(l, r) {
        let pointer = l;
        for (let i = l; i < r; i++) {
            if (nums[i] <= nums[r]) {
                let temp = nums[i];
                nums[i] = nums[pointer];
                nums[pointer] = temp;
                pointer += 1;
            }
        }
        let temp = nums[pointer];
        nums[pointer] = nums[r];
        nums[r] = temp;

        if (pointer > index) {
            return quickSelect(l, pointer - 1);
        } else if (pointer < index) {
            return quickSelect(pointer + 1, r);
        } else {
            return nums[pointer];
        }
    }

    return quickSelect(0, nums.length - 1);
};
