var reverse = function (x) {
    // Initialize a variable to store the reversed integer.
    let rev = 0;

    // While the input integer x is not equal to 0.
    while (x !== 0) {
        // Extract the last digit of x using the modulo operator (%).
        // Add this digit to the reversed integer rev, multiplying it by 10 to shift the existing digits to the left.
        rev = rev * 10 + (x % 10);

        // Remove the last digit from x by performing integer division by 10.
        x = (x / 10) | 0;
    }

    // After the loop, rev will contain the reversed integer.
    // However, JavaScript can represent large numbers, so we need to check if rev is within the 32-bit signed integer range.
    // If not, return 0; otherwise, return the reversed integer.
    return (rev | 0) === rev ? rev : 0;
};

console.log(reverse(123)); // 321
