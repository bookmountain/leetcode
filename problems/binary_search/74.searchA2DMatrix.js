var searchMatrix = function (matrix, target) {
    function flatten(arr, output = []) {
        for (const val of arr) {
            if (Array.isArray(val)) {
                flatten(val, output);
            } else {
                output.push(val);
            }
        }

        return output;
    }

    const flattenArr = flatten(matrix);
    function binarySearch(arr, target) {
        let min = 0;
        let max = arr.length - 1;

        while (min <= max) {
            let middle = Math.floor((min + max) / 2);
            if (arr[middle] > target) {
                max = middle - 1;
            } else if (arr[middle] < target) {
                min = middle + 1;
            } else {
                return middle;
            }
        }

        return -1;
    }

    return binarySearch(flattenArr, target) !== -1;
};

console.log(
    searchMatrix([
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
    ])
);
