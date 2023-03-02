let unsorted = [14, -4, 17, 6, 22, 1, -5];

console.log(insertionSort(unsorted));

function insertionSort(arr) {
    for (let j = 1; j <= arr.length - 1; j++) {
        let key = arr[j];
        i = j - 1;
        console.log(arr);
        while (i >= 0 && arr[i] > key) {
            arr[i + 1] = arr[i];
            i--;
        }
        arr[i + 1] = key;
    }

    return arr;
}
