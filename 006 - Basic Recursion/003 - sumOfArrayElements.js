// SUM OF ARRAY ELEMENTS:
// ======================

// Given an array nums, find the sum of elements of array using recursion.

// Input: nums = [5, 8, 1]
// Output: 14
// Explanation: The sum of elements of array is 5 + 8 + 1 => 14.

// TIME COMPLEXITY: O(n) because each element in the array is processed exactly once.
// SPACE COMPLEXITY: O(n) due to the recursion stack, which can grow up to the size of the array.
function arraySum(nums, i = 0) {
  return i >= nums.length ? 0 : nums[i] + arraySum(nums, i + 1);
}

const input = [5, 8, 1];
const result = arraySum(input);
console.log(`Sum of elements in ${input} is ${result}`);
