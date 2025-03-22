// LONGEST SUBARRAY WITH SUM K:
// ============================

// Given an array nums of size n and an integer k, find the length of the longest sub-array that sums up to k. If no such sub-array exists, return 0.

// Input: nums = [10, 5, 2, 7, 1, 9],  k=15
// Output: 4
// Explanation: The longest sub-array with a sum equal to 15 is [5, 2, 7, 1], which has a length of 4. 
// This sub-array starts at index 1 and ends at index 4, and the sum of its elements (5 + 2 + 7 + 1) equals 15. Therefore, the length of this sub-array is 4.

// Optimal (Positives + Negatives) Approach:
// ========================================

// TIME COMPLEXITY: O(N) or O(NxlogN) depending on the map data structure used, where N is the size of the array. 
// For example, using an unordered_map in C++ gives a time complexity of O(N) (though in the worst case, unordered_map takes O(N) to find an element, making the time complexity O(N2)). 
// If we use a map data structure, the time complexity is O(NxlogN). The best case complexity is O(N) as we are traversing the array with a loop.

// SPACE COMPLEXITY: O(N), since we are using a map data structure.
function longestSubarray(nums, k) {
}

const input1 = [10, 5, 2, 7, 1, 9];
const input2 = 15;
const result = longestSubarray(input1, input2);
console.log(`Longest sub-array with sum ${input2} in array ${input1} is ${result}`);

// Optimal (Only Positives) Approach:
// ==================================

// TIME COMPLEXITY: O(N), where N is the size of the array.
// There are two pointers left and right which traverse the array at once taking linear time.

// SPACE COMPLEXITY: O(1), as only a couple of variables are used.
function longestSubarrayOnlyPositives(nums, k) {
}

const input3 = [10, 5, 2, 7, 1, 9];
const input4 = 15;
const result2 = longestSubarrayOnlyPositives(input3, input4);
console.log(`Longest sub-array with sum ${input4} in array ${input3} is ${result2}`);