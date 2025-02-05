// CHECK FOR PERFECT NUMBER:
// =========================

// You are given an integer n. You need to check if the number is a perfect number or not. Return true if it is a perfect number, otherwise, return false.
// A perfect number is a number whose proper divisors add up to the number itself.

// Input: n = 6
// Output: true
// Explanation: Proper divisors of 6 are 1, 2, 3.
// 1 + 2 + 3 = 6.

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
function isPerfect(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum += n % i == 0 ? i : 0;
    }
    return n == sum;
}

const input = 6;
const result = isPerfect(input);
console.log(`${input} is ${result ? "a Perfect" : "not a Perfect"} number`);