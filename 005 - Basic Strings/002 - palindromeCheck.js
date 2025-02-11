// PALINDROME CHECK:
// =================

// You are given a string s. Return true if the string is palindrome, otherwise false. 
// A string is called palindrome if it reads the same forward and backward.

// Input: s = "hannah"
// Output: true
// Explanation: The given string when read backward is -> "hannah", which is same as when read forward.
// Hence answer is true.

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
function palindromeCheck(s) {
    let left = 0, right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }

    return true;
}

const input = "hannah";
const result = palindromeCheck(input);
console.log(`${input} is ${result ? "a Palindrome" : "not a Palindrome"}`);