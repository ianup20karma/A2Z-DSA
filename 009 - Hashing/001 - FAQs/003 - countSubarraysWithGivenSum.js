// COUNT SUBARRAYS WITH GIVEN SUM:
// ===============================

// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// Input: nums = [1, 1, 1], k = 2
// Output: 2
// Explanation: In the given array [1, 1, 1], there are two subarrays that sum up to 2: [1, 1] and [1, 1]. Hence, the output is 2.

// TIME COMPLEXITY: O(N) or O(NxlogN) depending on the map data structure used, where N is the size of the array. 
// For example, if we use an unordered_map in C++, the time complexity will be O(N), but if we use a map, the time complexity will be O(NxlogN). 
// The minimum complexity is O(N) as we are using a single loop to traverse the array.

// SPACE COMPLEXITY: O(N) as we are using a map data structure.
function subarraySum(nums, k) {
}

const input1 = [1, 2, 3];
const input2 = 3;
const result = subarraySum(input1, input2);
console.log(`Total number of sub-arrays with sum ${input2} in array ${input1} is ${result}`);