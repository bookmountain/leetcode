var fizzBuzz = function (n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        let word = "";
        if (i % 3 === 0) {
            word += "Fizz";
        }
        if (i % 5 === 0) {
            word += "Buzz";
        }
        if (word === "") {
            word = i.toString();
        }
        result.push(word);
    }
    return result;
};

console.log(fizzBuzz(5));
