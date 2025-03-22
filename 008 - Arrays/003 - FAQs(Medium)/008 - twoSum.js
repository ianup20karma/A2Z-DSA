// TWO SUM:
// ========

// Given an array of integers nums and an integer target. Return the indices(0 - indexed) of two elements in nums such that they add up to target.
// Each input will have exactly one solution, and the same element cannot be used twice. Return the answer in non-decreasing order.

// Input: nums = [1, 6, 2, 10, 3], target = 7
// Output: [0, 1]
// Explanation: nums[0] + nums[1] = 1 + 6 = 7

// TIME COMPLEXITY: O(N) + O(NxlogN), where N is size of the array. As the loop will run at most N times & sorting the array will take N * logN time complexity.
// SPACE COMPLEXITY: O(1) not using any extra space.
// Note: Here we are distorting the given array. So, if we need to consider this change, the space complexity will be O(N).
function twoSum(nums, target) {
}

const input1 = [1, 6, 2, 10, 3];
const input2 = 7;
const result = twoSum(input1, input2);
console.log(`Indices of the sum ${input2} in array ${input1} are ${result}`);