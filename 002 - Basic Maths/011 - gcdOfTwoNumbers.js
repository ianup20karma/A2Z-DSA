// GCD OF TWO NUMBERS:
// ===================

// You are given two integers n1 and n2. You need find the Greatest Common Divisor (GCD) of the two given numbers. Return the GCD of the two numbers.
// The Greatest Common Divisor (GCD) of two integers is the largest positive integer that divides both of the integers.

// Input: n1 = 4, n2 = 6
// Output: 2
// Explanation: Divisors of n1 = 1, 2, 4, Divisors of n2 = 1, 2, 3, 6
// Greatest Common divisor = 2.

// TIME COMPLEXITY: O(log(min(n1, n2)))
// SPACE COMPLEXITY: O(1)
function GCD(n1, n2) {
    while (n1 > 0 && n2 > 0) {
        if (n1 > n2) { n1 = n1 % n2; } 
        else { n2 = n2 % n1; }
    }

    if (n1 === 0) return n2;
    return n1;
}

const input1 = 4;
const input2 = 6;
const result = GCD(input1, input2);
console.log(`GCD of ${input1} & ${input2} is ${result}`);