// DIVISORS OF A NUMBER:
// =====================

// You are given an integer n. You need to find all the divisors of n. Return all the divisors of n as an array or list in a sorted order.
// A number which completely divides another number is called it's divisor.

// Input: n = 8
// Output: [1, 2, 4, 8]
// Explanation: The divisors of 8 are 1, 2, 4, 8.

// Iterating sqrt(n) times, and performing constant time operations in each pass
// Sorting the list of divisors takes O(k*Log(k))
// TIME COMPLEXITY: O(sqrt(n)) + O(k*Log(k))
// SPACE COMPLEXITY: O(1)
function divisors(n) {
    const ans = [];
    const sqrtN = Math.floor(Math.sqrt(n));

    for(let i = 1; i <= sqrtN; i++) {
        if(n % i === 0) {
            ans.push(i);
            if(i !== n / i) ans.push(n / i);
        }
    }

    ans.sort((a, b) => a - b);
    return ans;
}

const input = 8;
const result = divisors(input);
console.log(`Divisors of ${input} are [${result}]`);