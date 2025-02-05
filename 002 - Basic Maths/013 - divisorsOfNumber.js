// DIVISORS OF A NUMBER:
// =====================

// You are given an integer n. You need to find all the divisors of n. Return all the divisors of n as an array or list in a sorted order.
// A number which completely divides another number is called it's divisor.

// Input: n = 6
// Output = [1, 2, 3, 6]
// Explanation: The divisors of 6 are 1, 2, 3, 6.

function divisors(n) {
    const resultantDivisors = [];
    for (let i = 1; i <= n; i++) {
        n % i === 0 && resultantDivisors.push(i)
    }
    return resultantDivisors;
}