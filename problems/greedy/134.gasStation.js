var canCompleteCircuit = function (gas, cost) {
    let totalGas = 0;
    let currentGas = 0;
    let startingIndex = 0;
    for (let i = 0; i < gas.length; i++) {
        const diff = gas[i] - cost[i];

        totalGas += diff;
        currentGas += diff;
        if (currentGas < 0) {
            currentGas = 0;
            startingIndex = i + 1;
        }
    }

    return totalGas >= 0 ? startingIndex : -1;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
