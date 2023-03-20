const perm = (arr) => {
    if (arr.length === 1) {
        return [arr];
    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let first = arr[i];
        let rest = arr.slice(0, i).concat(arr.slice(i + 1));
        let perms = perm(rest);
        for (let j = 0; j < perms.length; j++) {
            result.push([first].concat(perms[j]));
        }
    }
    return result;
};

console.log(perm(["A", "B", "C"]));
console.log("-------------------------------------------------------");

let result = [];
const swap = (arr, n1, n2) => {
    let temp = arr[n2];
    arr[n2] = arr[n1];
    arr[n1] = temp;
};

const permRecursive = (arr, start) => {
    if (start >= arr.length) {
        result.push([...arr]);
    } else {
        for (let i = start; i < arr.length; i++) {
            swap(arr, start, i);
            permRecursive(arr, start + 1);
            swap(arr, start, i);
        }
    }
};

permRecursive(["A", "B", "C"], 0);
console.log(result);
