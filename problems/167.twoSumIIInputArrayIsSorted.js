var twoSum = function (numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    while (j < numbers.length) {
        let a = numbers[i];
        let b = numbers[j];
        if (a + b > target) {
            j -= 1;
        } else if (a + b < target) {
            i += 1;
        } else if (a + b === target) {
            return [i + 1, j + 1];
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
