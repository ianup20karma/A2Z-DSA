// DIVISORS OF A NUMBER:
// =====================

// You are given an integer n. You need to find all the divisors of n. Return all the divisors of n as an array or list in a sorted order.
// A number which completely divides another number is called it's divisor.

// Input: n = 8
// Output: [1, 2, 4, 8]
// Explanation: The divisors of 8 are 1, 2, 4, 8.

function divisors(n) {
    const resultantDivisors = [];
    for (let i = 1; i <= n; i++) {
        n % i === 0 && resultantDivisors.push(i)
    }
    return resultantDivisors;
}

const input = 8;
const result = divisors(input);
console.log(`Divisors of ${input} are [${result}]`);