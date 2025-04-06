// SUM OF FIRST N NUMBERS:
// =======================

// Given an integer N, return the sum of first N natural numbers. Try to solve this using recursion.

// Input: N = 4
// Output: 10
// Explanation: first four natural numbers are 1, 2, 3, 4.
// Sum is 1 + 2 + 3 + 4 => 10.

// TIME COMPLEXITY: O(n) - proportional to the number of calls made.
// SPACE COMPLEXITY: O(n) - proportional to the depth of recursion.
function NnumbersSum(N) {
  return N == 0 ? 0 : N + NnumbersSum(N - 1);
}

const input = 4;
const result = NnumbersSum(input);
console.log('Sum of numbers till', input, 'is', result);
