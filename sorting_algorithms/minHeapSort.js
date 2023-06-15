let heapSize;
let arr = [4, 5, 8, 2];
minHeapSort();
console.log("heap sorted", arr);

function buildMinHeap() {
    heapSize = arr.length - 1;
    for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
        minHeapify(i);
    }
}

function minHeapify(i) {
    let smallest;
    let l = i * 2 + 1;
    let r = i * 2 + 2;
    if (l <= heapSize && arr[l] < arr[i]) {
        smallest = l;
    } else {
        smallest = i;
    }
    if (r <= heapSize && arr[r] < arr[smallest]) {
        smallest = r;
    }
    if (smallest !== i) {
        // swap arr[i] with arr[smallest]
        let temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;
        minHeapify(smallest);
    }
}

function minHeapSort() {
    buildMinHeap();
    console.log("min heap", arr);
    for (let i = arr.length - 1; i >= 0; i--) {
        // exchange arr[0] with arr[i]
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapSize -= 1;
        minHeapify(0);
    }

    return arr;
}
