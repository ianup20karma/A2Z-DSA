// ROTATE STRING:
// ==============

// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
// A shift on s consists of moving the leftmost character of s to the rightmost position.
// For example, if s = "abcde", then it will be "bcdea" after one shift.

// Input: s = "abcde" , goal = "cdeab"
// Output: true
// Explanation: After performing 2 shifts we can achieve the goal string from string s.
// After first shift the string s is => bcdea
// After second shift the string s is => cdeab.

// TIME COMPLEXITY: O(n) because checking for a substring in s + s is linear in time.
// SPACE COMPLEXITY: O(n) for the space needed to store the concatenated string s + s.
function rotateString(s, goal) {
    if (s.length !== goal.length) return false;
    const doubledS = s + s;
    return doubledS.includes(goal);
}

const str = "abcde";
const goal = "cdeab";
const result = rotateString(str, goal);
console.log(`${str} ${result ? "can" : "cannot"} be rotated to become ${goal}`);