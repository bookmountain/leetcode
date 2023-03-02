function merge(a1, a2) {
    // a1, a2 will be sorted arrays due to divided to the minium length
    let result = [];
    let i = 0;
    let j = 0;

    while (i < a1.length && j < a2.length) {
        if (a1[i] > a2[j]) {
            result.push(a2[j]);
            j++;
        } else {
            result.push(a1[i]);
            i++;
        }
    }

    // a1 or a2 might have some elements left
    // use loop to put them all into result
    while (i < a1.length) {
        result.push(a1[i]);
        i++;
    }
    while (j < a2.length) {
        result.push(a2[j]);
        j++;
    }
    console.log(result);

    return result;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    } else {
        let middle = Math.floor(arr.length / 2);
        let left = arr.slice(0, middle);
        let right = arr.slice(middle, arr.length);
        console.log(left, right);
        return merge(mergeSort(left), mergeSort(right));
    }
}

console.log(mergeSort([15, 3, 17, 18, 35, 11, 0, 36, -336, 1054]));
