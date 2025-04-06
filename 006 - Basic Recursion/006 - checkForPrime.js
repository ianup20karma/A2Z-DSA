// CHECK IF A NUMBER IS PRIME OR NOT:
// ==================================

// Given an integer num, return true if it is prime otherwise false.
// A prime number is a number that is divisible only by 1 and itself.

// Input: num = 5
// Output: true
// Explanation: The factors of 5 are 1 and 5 only.
// So it satisfies the prime number condition.

// TIME COMPLEXITY: O(sqrt(N)) because we only need to check for divisors up to the square root of the number.
// SPACE COMPLEXITY: O(sqrt(N)) due to the recursion stack depth which can grow up to the square root of the number.
function checkPrime(num, x = 2) {
  if (num <= 1 || num % x === 0) return false;
  if (x > Math.sqrt(num)) return true;
  return checkPrime(num, x + 1);
}

const input = 5;
const result = checkPrime(input);
console.log(input, 'is', result ? 'a' : 'not a', 'Prime number.');
