// REVERSE A NUMBER:
// =================

// You are given an integer n. Return the integer formed by placing the digits of n in reverse order.

// Input: n = 123
// Output: 321

// TIME COMPLEXITY: O(d) - d is the number of digits
// SPACE COMPLEXITY: O(1)
function reverseNumber(n) {
    let num = Math.abs(n);
    let sum = 0;
    while (num > 0) {
        const lastDigit = num % 10;
        sum = sum * 10 + lastDigit;
        num = Math.floor(num / 10);
    }

    return n < 0 ? -sum : sum;
}

const input = 56721;
const result = reverseNumber(input);
console.log(`Reverse of ${input} -`, result);