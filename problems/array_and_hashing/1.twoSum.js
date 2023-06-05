const numbers = [1, 99, 2, 3, 66, 7, 11, 15];
const target = 9;

const twoSum = (numbers, target) => {
    const comp = {};
    for (let i = 0; i < numbers.length; i++) {
        if (comp[target - numbers[i]] >= 0) {
            return [comp[target - numbers[i]], i];
        }
        comp[numbers[i]] = i;
    }
};

console.log(twoSum(numbers, target));
