// COUNT ALL DIGITS OF A NUMBER:
// =============================

// You are given an integer n. You need to return the number of digits in the number.
// The number will have no leading zeroes, except when the number is 0 itself.

// Input: n = 56721
// Output: 5

// TIME COMPLEXITY: O(log n)
// SPACE COMPLEXITY: O(1)
function countDigit(n) {
    if (n == 0) return 1;

    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count += 1;
    }

    // OR (Faster - O(1))
    // let count = Math.floor(Math.log10(n) + 1);

    return count;
}

const input = 56721;
const result = countDigit(input);
console.log(`Total Digits in ${input} -`, result);