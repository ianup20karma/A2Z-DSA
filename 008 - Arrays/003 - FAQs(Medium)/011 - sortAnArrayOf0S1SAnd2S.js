// SORT AN ARRAY OF 0'S 1'S AND 2'S:
// =================================

// Given an array nums consisting of only 0, 1, or 2. Sort the array in non-decreasing order. The sorting must be done in-place, without making a copy of the original array.

// Input: nums = [1, 0, 2, 1, 0]
// Output: [0, 0, 1, 1, 2]
// Explanation: The nums array in sorted order has 2 zeroes, 2 ones and 1 two

// TIME COMPLEXITY: O(N), where N is the size of the array, as there is single traversal of the array.
// SPACE COMPLEXITY: O(1), no extra space is used.
function sortZeroOneTwo(nums) {
}

const input = [1, 0, 2, 1, 0];
const result = sortZeroOneTwo([...input]);
console.log(`Array ${input} sorted of 0's 1's and 2's - ${result}`);