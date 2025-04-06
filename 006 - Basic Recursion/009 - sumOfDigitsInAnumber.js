// SUM OF DIGITS IN A GIVEN NUMBER:
// ================================

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Input: num = 529
// Output: 7
// Explanation: In first iteration the digits sum will be = 5 + 2 + 9 => 16
// In second iteration the digits sum will be 1 + 6 => 7.
// Now single digit is remaining , so we return it.

// TIME COMPLEXITY: O(log n)
// Because each recursive call processes a number with fewer digits than the previous call, leading to logarithmic time complexity in terms of the number of digits.
// SPACE COMPLEXITY: O(log n)
// This space is required for the recursion stack, which grows with the number of digits in the number.
function addDigits(num) {
  if (num < 10) return num;

  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return addDigits(sum);
}

const input = 529;
const result = addDigits(input);
console.log('Sum of digits in', input, 'is', result);
