// CHECK IF THE NUMBER IS ARMSTRONG:
// =================================

// You are given an integer n. You need to check whether it is an armstrong number or not. Return true if it is an armstrong number, otherwise return false.
// An armstrong number is a number which is equal to the sum of the digits of the number, raised to the power of the number of digits.

// Input: n = 153
// Output: true
// Explanation: Number of digits : 3.
// 1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 1 + 125 + 27 = 153.
// Therefore, it is an Armstrong number.

// TIME COMPLEXITY: O(log10 n)
// SPACE COMPLEXITY: O(1)
function isArmstrong(n) {
  let num = Math.abs(n);
  let digitsCount = Math.floor(Math.log10(n)) + 1;
  let calcSum = 0;
  while (num > 0) {
    const lastDigit = num % 10;
    calcSum += lastDigit ** digitsCount;
    num = Math.floor(num / 10);
  }

  return n == calcSum;
}

const input = 370;
const result = isArmstrong(input);
console.log(`${input} is ${result ? "an Armstrong" : "not an Armstrong"} number`);
