// 4 SUM:
// ======

// Given an integer array nums and an integer target. Return all quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
//     a, b, c, d are all distinct valid indices of nums.
//     nums[a] + nums[b] + nums[c] + nums[d] == target.

// Notice that the solution set must not contain duplicate quadruplets. One element can be a part of multiple quadruplets. The output and the quadruplets can be returned in any order.

// Input: nums = [1, -2, 3, 5, 7, 9], target = 7
// Output: [[-2, 1, 3, 5]]
// Explanation: nums[1] + nums[0] + nums[2] + nums[3] = 7

// TIME COMPLEXITY: O(N3), as each of the pointers i and j, is running for approximately N times. 
// And both the pointers k and l combined can run for approximately N times including the operation of skipping duplicates. 
// So the total time complexity will be O(N3). Here N is size of the array.

// SPACE COMPLEXITY: O(no. of quadruplets), this space is only used to store the answer. 
// No extra space is used to solve this problem. So, from that perspective, space complexity can be written as O(1).
function fourSum(nums, target) {
}

const input1 = [1, -2, 3, 5, 7, 9];
const input2 = 7;
const result = fourSum(input1, input2);
console.log(`All Quadruplets whose sum is ${input2} in ${input} are ${result}`);