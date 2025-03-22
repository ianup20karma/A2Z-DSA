// LEADERS IN AN ARRAY:
// ====================

// Given an integer array nums, return a list of all the leaders in the array.

// A leader in an array is an element whose value is strictly greater than all elements to its right in the given array. 
// The rightmost element is always a leader. The elements in the leader array must appear in the order they appear in the nums array.

// Input: nums = [1, 2, 5, 3, 1, 2]
// Output: [5, 3, 2]
// Explanation: 2 is the rightmost element, 3 is the largest element in the index range [3, 5], 5 is the largest element in the index range [2, 5]

// TIME COMPLEXITY: O(n), where n is the length of the array.
// SPACE COMPLEXITY: O(1), extra space to store answer is not considered.
function leaders(nums) {
}

const input = [1, 2, 5, 3, 1, 2];
const result = leaders(input);
console.log(`Leaders in array ${input} are ${result}`);