// COUNT OF PRIME NUMBERS TILL N:
// ==============================

// You are given an integer n. You need to find out the number of prime numbers in the range [1, n] (inclusive). Return the number of prime numbers in the range.
// A prime number is a number which has no divisors except, 1 and itself.

// Input: n = 10
// Output: 4
// Explanation: Prime numbers in the range [1, 10] are 2, 3, 5, 7.

// TIME COMPLEXITY: O(N ^ 1/2) - checking if a number is prime
// TIME COMPLEXITY (Overall): O(N ^ 3/2) - checking all numbers from 1 to N
// SPACE COMPLEXITY: O(1)
function primeUptoN(n) {
    const isPrime = (n) => {
        let count = 0;
        for(let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                count += 1;
                if (n / i !== i) {
                    count = count + 1;
                }
            }
        }

        return count == 2;
    }

    let count = 0;
    for (let i = 2; i <= n; i++) {
        isPrime(i) && count++;
    }

    return count;
}

const input = 20;
const result = primeUptoN(input);
console.log(`Count of prime numbers till ${input} is ${result}`);
