var multiply = function (num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";
    const res = new Array(num1.length + num2.length).fill(0);
    for (let i = num1.length - 1; i >= 0; i--) {
        const n1 = num1[i];
        for (let j = num2.length - 1; j >= 0; j--) {
            const n2 = num2[j];
            const product = n1 * n2;
            const sum = res[i + j + 1] + product;
            res[i + j + 1] = sum % 10;
            res[i + j] += Math.floor(sum / 10);
        }
    }
    if (res[0] === 0) res.shift();
    return res.join("");
};

console.log(multiply("123", "456"));
