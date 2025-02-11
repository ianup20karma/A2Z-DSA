// FACTORIAL OF A GIVEN NUMBER:
// ============================

// Given an integer n, return the factorial of n.
// Factorial of a non-negative integer, is the multiplication of all integers smaller than or equal to n (use 64-bits to return answer).

// Input: n = 5
// Output: 120
// Explanation: Factorial = 1 * 2 * 3 * 4 * 5 => 120

// TIME COMPLEXITY: O(n) - proportional to the number of recursive calls.
// SPACE COMPLEXITY: O(n) - proportional to the depth of recursion.
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

const input = 5;
const result = factorial(input);
console.log(`Factorial of ${input} is ${result}`);
