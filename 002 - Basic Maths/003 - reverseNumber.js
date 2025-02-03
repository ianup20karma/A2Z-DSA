// REVERSE A NUMBER:
// =================

// You are given an integer n. Return the integer formed by placing the digits of n in reverse order.

// Input: n = 123
// Output: 321

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

const inputForReverseNumber = 56721;
const reverseNumberResult = reverseNumber(inputForReverseNumber);
console.log(`Reverse of ${inputForReverseNumber} -`, reverseNumberResult);