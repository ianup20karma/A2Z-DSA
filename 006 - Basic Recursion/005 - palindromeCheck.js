// CHECK IF STRING IS PALINDROME OR NOT:
// =====================================

// Given a string s, return true if the string is palindrome, otherwise false.
// A string is called palindrome if it reads the same forward and backward.

// Input: s = "hannah"
// Output: true
// Explanation: The string when reversed is --> "hannah", which is same as original string , so we return true.

// TIME COMPLEXITY: O(n) - A single pass through the string with recursive calls, where n is the length of the string.
// SPACE COMPLEXITY: O(n) - Due to the recursion stack that grows with the length of the string.
function palindromeCheck(s) {
  const reverseString = (s, left, right) => {
    if (left >= right) return true;
    if (s[left] !== s[right]) return false;
    return reverseString(s, left + 1, right - 1);
  }

  return reverseString(s, 0, s.length - 1);
}

const input = "hannah";
const result = palindromeCheck(input);
console.log(input, 'is', result ? 'a Palindrome' : 'not a Palindrome');
