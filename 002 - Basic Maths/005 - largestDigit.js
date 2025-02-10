// RETURN THE LARGEST DIGIT IN A NUMBER:
// =====================================

// You are given an integer n. Return the largest digit present in the number.

// Input: n = 25
// Output: 5

// TIME COMPLEXITY: O(d) - d is the number of digits
// SPACE COMPLEXITY: O(1)
function largestDigit(n) {
    if (n == 0) return 0;

    let maxDigit = 0;
    while (n > 0) {
        const lastDigit = n % 10;
        n = Math.floor(n / 10);
        if (lastDigit > maxDigit) maxDigit = lastDigit;
    }

    return maxDigit;
}

const input = 25;
const result = largestDigit(input);
console.log(`${result} is the largest digit in ${input}`);