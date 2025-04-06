// REVERSE A STRING:
// =================

// Given an input string as an array of characters, write a function that reverses the string.

// Input: s = ["h", "e", "l", "l", "o"]
// Output: ["o", "l", "l", "e", "h"]
// Explanation: The given string is s = "hello" and after reversing it becomes s = "olleh".

// TIME COMPLEXITY: O(n) because each character in the string is processed exactly once.
// SPACE COMPLEXITY: O(n) due to depth of the recursion.
function reverseString(s) {
  const reverse = (s, left, right) => {
    if (left >= right) return s;
    [s[left], s[right]] = [s[right], s[left]];
    return reverse(s, left + 1, right - 1);
  };
  return reverse(s, 0, s.length - 1);
}

const input = ["h", "e", "l", "l", "o"];
const result = reverseString(input);
console.log('Reverse of', input, 'is', result);
