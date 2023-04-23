var topKFrequent = function (nums, k) {
    const count = {};
    const freq = new Array(nums.length + 1).fill(new Array());
    for (let n of nums) {
        if (count[n]) {
            count[n] += 1;
        } else {
            count[n] = 1;
        }
    }
    for (const [key, value] of Object.entries(count)) {
        if (freq[value].length > 0) {
            freq[value].push(key);
        } else {
            freq[value] = [key];
        }
    }

    const result = [];
    for (let i = freq.length - 1; i >= 0; i--) {
        for (let n of freq[i]) {
            result.push(n);
            if (result.length === k) {
                return result;
            }
        }
    }
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
