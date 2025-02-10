// REVERSE A NUMBER:
// =================

// You are given an integer n. Return the integer formed by placing the digits of n in reverse order.

// Input: n = 123
// Output: 321

// TIME COMPLEXITY: O(d) - d is the number of digits
// SPACE COMPLEXITY: O(1)
function reverseNumber(n) {
    let reverseNum = 0;
    while (n > 0) {
        const lastDigit = n % 10;
        reverseNum = reverseNum * 10 + lastDigit;
        n = Math.floor(n / 10);
    }

    return reverseNum;
}

const input = 56721;
const result = reverseNumber(input);
console.log(`Reverse of ${input} -`, result);