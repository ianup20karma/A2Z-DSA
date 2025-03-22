// 3 SUM:
// ======

// Given an integer array nums. Return all triplets such that:
//     i != j, i != k, and j != k
//     nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets. One element can be a part of multiple triplets. The output and the triplets can be returned in any order.

// Input: nums = [2, -2, 0, 3, -3, 5]
// Output: [[-2, 0, 2], [-3, -2, 5], [-3, 0, 3]]
// Explanation: nums[1] + nums[2] + nums[0] = 0
// nums[4] + nums[1] + nums[5] = 0
// nums[4] + nums[2] + nums[3] = 0

// TIME COMPLEXITY: O(NlogN)+O(N2), where N is size of the array. As the pointer i, is running for approximately N times. 
// And both the pointers j and k combined can run for approximately N times including the operation of skipping duplicates. 
// So the total time complexity will be O(N2).
// SPACE COMPLEXITY: O(1), no extra space is used.
function threeSum(n) {
}

const input = [2, -2, 0, 3, -3, 5];
const result = threeSum(input);
console.log(`All Triplets whose sum is 0 in ${input} are ${result}`);