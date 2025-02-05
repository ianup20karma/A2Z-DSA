// COUNT OF PRIME NUMBERS TILL N:
// ==============================

// You are given an integer n. You need to find out the number of prime numbers in the range [1, n] (inclusive). Return the number of prime numbers in the range.
// A prime number is a number which has no divisors except, 1 and itself.

// Input: n = 10
// Output: 4
// Explanation: Prime numbers in the range [1, 10] are 2, 3, 5, 7.

// TIME COMPLEXITY: O(n^2)
// SPACE COMPLEXITY: O(1)
function primeUptoN(n) {
    const isPrime = (n) => {
        if (n < 2) return false;

        let result = true;
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                result = false;
                break;
            }
        }
        return result;
    };

    let count = 0;
    for (let i = 2; i <= n; i++) {
        isPrime(i) && count++;
    }

    return count;
}

const input = 20;
const result = primeUptoN(input);
console.log(`Count of prime numbers till ${input} is ${result}`);
