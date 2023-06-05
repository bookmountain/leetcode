var longestConsecutive = function (nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (n of nums) {
        if (!numSet.has(n - 1)) {
            let length = 1;
            while (numSet.has(n + length)) {
                length++;
            }
            longest = Math.max(length, longest);
        }
    }
    return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
