// FIBONACCI NUMBER:
// =================

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.

// Given n, calculate F(n).


// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) => 1 + 1 => 2.

// TIME COMPLEXITY: O(2^n) because Each function call makes two more calls (for n-1 and n-2), resulting in an exponential growth in the number of calls.
// SPACE COMPLEXITY: O(n) because proportional to the recursion depth. The call stack grows with each recursive call
function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

const input = 3;
const result = fib(input);
console.log(`Fibonacci Number at ${input} position is ${result}`);
