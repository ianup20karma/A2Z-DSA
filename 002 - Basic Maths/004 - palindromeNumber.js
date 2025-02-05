// PALINDROME NUMBER:
// ==================

// You are given an integer n. You need to check whether the number is a palindrome number or not. 
// Return true if it's a palindrome number, otherwise return false.
// A palindrome number is a number which reads the same both left to right and right to left.

// Input: n = 121
// Output: true
// Explanation: When read from left to right : 121.
// When read from right to left : 121.

// TIME COMPLEXITY: O(d) - d is the number of digits
// SPACE COMPLEXITY: O(1)
function isPalindrome(n) {
    const reverseNumber = (n) => {
        let num = Math.abs(n);
        let reverseNum = 0;
        while (num > 0) {
            const lastDigit = num % 10;
            reverseNum = reverseNum * 10 + lastDigit;
            num = Math.floor(num / 10);
        }

        return n < 0 ? -reverseNum : reverseNum;
    };

    return n == reverseNumber(n);
}

const input = 121;
const result = isPalindrome(input);
console.log(`${input} is ${result? "a Palindrome" : "not a Palindrome"}`);