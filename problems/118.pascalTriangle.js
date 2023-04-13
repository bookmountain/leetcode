var generate = function (numRows) {
    const result = [];
    if (numRows >= 1) {
        result.push([1]);
    }
    if (numRows >= 2) {
        result.push([1, 1]);
    }
    for (let i = 3; i <= numRows; i++) {
        const currentRow = [1];
        const previousRow = result[i - 2];
        for (let i = 0; i <= result.length - 2; i++) {
            currentRow.push(previousRow[i] + previousRow[i + 1]);
        }
        currentRow.push(1);
        result.push(currentRow);
    }
    return result;
};

console.log(generate(5));
