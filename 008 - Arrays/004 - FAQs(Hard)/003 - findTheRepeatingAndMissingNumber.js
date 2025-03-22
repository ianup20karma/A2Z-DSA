// FIND THE REPEATING AND MISSING NUMBER:
// ======================================

// Given an integer array nums of size n containing values from [1, n] and each value appears exactly once in the array, except for A, which appears twice and B which is missing.
// Return the values A and B, as an array of size 2, where A appears in the 0-th index and B in the 1st index.

// Input: nums = [3, 5, 4, 1, 1]
// Output: [1, 2]
// Explanation: 1 appears two times in the array and 2 is missing from nums

// TIME COMPLEXITY: O(N), as a single loop is used, where N is the size of the given array.
// SPACE COMPLEXITY: O(1) no extra space is used.
function findMissingRepeatingNumbers(nums) {
}

const input = [1, 2, 3, 6, 7, 5, 7];
const result = findMissingRepeatingNumbers(input);
console.log(`Repeating and missing numbers in the given array are: ${result}`);