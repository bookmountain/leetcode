function bubbleSort(arr) {
    let step = 0;
    // sorted elements
    for (let i = 0; i <= arr.length - 2; i++) {
        let swapping = false;
        // adjacent elements
        console.log(arr);
        for (let j = arr.length - 1; j >= i + 1; j--) {
            if (arr[j] < arr[j - 1]) {
                console.log(arr[j], arr[j - 1]);
                // swap arr[j] and arr[j - 1]
                swapping = true;
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                step++;
            }
        }
        if (swapping === false) {
            console.log("break");
            break;
        }
    }
    console.log(step);
}

bubbleSort([2, 3, 4, 0, 5, 6, 1, 7]);
