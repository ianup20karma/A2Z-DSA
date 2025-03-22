// LONGEST CONSECUTIVE SEQUENCE IN AN ARRAY:
// =========================================

// Given an array nums of n integers, return the length of the longest sequence of consecutive integers. The integers in this sequence can appear in any order.

// Input: nums = [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest sequence of consecutive elements in the array is [1, 2, 3, 4], which has a length of 4. 
// This sequence can be formed regardless of the initial order of the elements in the array.

// TIME COMPLEXITY: O(N) + O(2xN) ~ O(3xN), where N is the size of the array. 
// The function takes O(N) to insert all elements into the set data structure. 
// After that, for every starting element, we find the consecutive elements. 
// Although nested loops are used, the set will be traversed at most twice in the worst case. 
// Therefore, the time complexity is O(2xN) instead of O(N2).

// SPACE COMPLEXITY: O(N), as we use a set data structure to solve this problem.
// Note: The time complexity assumes that we use an unordered_set, which has O(1) time complexity for set operations.

// In the worst case, if the set operations take O(N), the total time complexity would be approximately O(N2). If we use a set instead of an unordered_set, the set operations will have a time complexity of O(logN), resulting in a total time complexity of O(NlogN).
function longestConsecutive(nums) {
}

const input = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
const result = longestConsecutive(input);
console.log(`Longest consecutive sequence in array ${input} is ${result}`);