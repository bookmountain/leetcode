function knapsack(capacity, weights, values, n) {
    let K = [];

    for (let i = 0; i <= n; i++) {
        K[i] = [];
    }

    for (let i = 0; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (i === 0 || w === 0) {
                K[i][w] = 0;
            } else if (weights[i - 1] <= w) {
                K[i][w] = Math.max(values[i - 1] + K[i - 1][w - weights[i - 1]], K[i - 1][w]);
            } else {
                K[i][w] = K[i - 1][w];
            }
        }
    }

    return K[n][capacity];
}

// Example usage:
let capacity = 7;
let weights = [3, 4, 2, 5, 1];
let values = [4, 5, 3, 1, 2];

let result = knapsack(capacity, weights, values);
console.log(result.maxVal);
console.log(result.items);
