// COUNT ALL DIGITS OF A NUMBER:
// =============================

// You are given an integer n. You need to return the number of digits in the number.
// The number will have no leading zeroes, except when the number is 0 itself.

// Input: n = 56721
// Output: 5

function countDigit(n) {
    n = Math.abs(n);
    if (n == 0) return 1;

    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count += 1;
    }

    return count;
}

const inputForCountDigit = 56721;
const countDigitResult = countDigit(inputForCountDigit);
console.log(`Total Digits in ${inputForCountDigit} -`, countDigitResult);