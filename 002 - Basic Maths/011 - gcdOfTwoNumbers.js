// GCD OF TWO NUMBERS:
// ===================

// You are given two integers n1 and n2. You need find the Greatest Common Divisor (GCD) of the two given numbers. Return the GCD of the two numbers.
// The Greatest Common Divisor (GCD) of two integers is the largest positive integer that divides both of the integers.

// Input: n1 = 4, n2 = 6
// Output: 2
// Explanation: Divisors of n1 = 1, 2, 4, Divisors of n2 = 1, 2, 3, 6
// Greatest Common divisor = 2.

function GCD(n1, n2) {
    let gcd = 1;

    for (let i = 1; i <= Math.min(n1, n2); i++) {
        if (n1 % i === 0 && n2 % i === 0) {
            gcd = i;
        }
    }

    return gcd;
}

const input1 = 4;
const input2 = 6;
const result = GCD(input1, input2);
console.log(`GCD of ${input1} & ${input2} is ${result}`);