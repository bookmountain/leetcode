var plusOne = function (digits) {
    // Initialize a carry variable to add to the least significant digit.
    let carry = 1;

    // Start from the least significant digit (rightmost).
    for (let i = digits.length - 1; i >= 0; i--) {
        // Add the carry to the current digit.
        let sum = digits[i] + carry;

        // Update the carry for the next iteration.
        carry = Math.floor(sum / 10);

        // Update the current digit with the remainder after adding the carry.
        digits[i] = sum % 10;
    }

    // If there is still a carry after the loop (e.g., 9 + 1 = 10),
    // add it as a new digit at the beginning of the array.
    if (carry > 0) {
        digits.unshift(carry);
    }

    return digits;
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
