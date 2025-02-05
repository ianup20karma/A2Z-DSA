// CHECK FOR PRIME NUMBER:
// =======================

// You are given an integer n. You need to check if the number is prime or not. Return true if it is a prime number, otherwise return false.
// A prime number is a number which has no divisors except 1 and itself.

// Input: n = 5
// Output: true
// Explanation: The only divisors of 5 are 1 and 5 , So the number 5 is prime.

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
function isPrime(n) {
    if (n < 2) return false;

    let result = true;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            result = false;
            break;
        }
    }
    return result;
}

const input = 5;
const result = isPrime(input);
console.log(`${input} is ${result ? "a Prime" : "not a Prime"} number`);