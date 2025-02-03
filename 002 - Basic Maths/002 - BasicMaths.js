// COUNT ALL DIGITS OF A NUMBER:
// =============================

// You are given an integer n. You need to return the number of digits in the number.
// The number will have no leading zeroes, except when the number is 0 itself.

// Input: n = 56721
// Output: 5

function countDigit(n) {
    n = Math.abs(n);
    if (n == 0) return 1;

    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count += 1;
    }

    return count;
}

const inputForCountDigit = 56721;
const countDigitResult = countDigit(inputForCountDigit);
console.log(`Total Digits in ${inputForCountDigit} -`, countDigitResult);



// COUNT NUMBER OF ODD DIGITS IN A NUMBER:
// =======================================

// You are given an integer n. You need to return the number of digits in the number.
// The number will have no leading zeroes, except when the number is 0 itself.

// Input: n = 56721
// Output: 3

function countOddDigit(n) {
    n = Math.abs(n);
    if (n == 0) return 1;

    let count = 0;
    while (n > 0) {
        const lastDigit = n % 10;
        n = Math.floor(n / 10);
        if (lastDigit % 2 !== 0) count += 1;
    }

    return count;
}

const inputForCountOddDigit = 56721;
const countOddDigitResult = countOddDigit(inputForCountOddDigit);
console.log(`Odd Digits in ${inputForCountOddDigit} -`, countOddDigitResult);



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