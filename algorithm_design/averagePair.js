averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);

function averagePair(arr, avg) {
    let count = 0;
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            count++;
            if ((arr[i] + arr[j]) / 2 == avg) {
                result.push([arr[i], arr[j]]);
            }
        }
    }
    // O(n^2)
    console.log(count);
    console.log(result);
}
