var containsDuplicate = function (nums) {
    const map = {};
    for (num of nums) {
        if (map[num]) {
            return true;
        } else {
            map[num] = 1;
        }
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
