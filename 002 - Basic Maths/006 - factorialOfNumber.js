// FACTORIAL OF A GIVEN NUMBER:
// ============================

// You are given an integer n. Return the value of n! or n factorial.
// Factorial of a number is the product of all positive integers less than or equal to that number.

// Input: n = 6
// Output: 720
// Explanation: 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720.

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
function factorial(n) {
    let result = 1;
    while (n > 0) {
        result = result * n;
        n = n - 1;
    }
    return result;
}

const input = 6;
const result = factorial(input);
console.log(`${result} is the factorial of ${input}`);