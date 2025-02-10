// COUNT NUMBER OF ODD DIGITS IN A NUMBER:
// =======================================

// You are given an integer n. You need to return the number of digits in the number.
// The number will have no leading zeroes, except when the number is 0 itself.

// Input: n = 56721
// Output: 3

// TIME COMPLEXITY: O(d) - d is the number of digits
// SPACE COMPLEXITY: O(1)
function countOddDigit(n) {
    if (n == 0) return 1;

    let count = 0;
    while (n > 0) {
        const lastDigit = n % 10;
        n = Math.floor(n / 10);
        if (lastDigit % 2 !== 0) count += 1;
    }

    return count;
}

const input = 56721;
const result = countOddDigit(input);
console.log(`Odd Digits in ${input} -`, result);