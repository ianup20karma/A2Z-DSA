// SEARCH X IN SORTED ARRAY:
// =========================

// Given a sorted array of integers nums with 0-based indexing, find the index of a specified target integer. 
// If the target is found in the array, return its index. If the target is not found, return -1.


// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: The target integer 9 exists in nums and its index is 4

// TIME COMPLEXITY: O(log(N)) (where N is the size of the given array)
// In each step, the search space is divided into two halves. In the worst case, 
// this process will continue until the search space can no longer be divided and the number of divisions required to reduce the array size to one is log(N), 
// making the overall time complexity O(log(N)).

// SPACE COMPLEXITY: O(1), Using only a couple of variables.
function search(nums, target) { }

const input1 = [-1, 0, 3, 5, 9, 12];
const input2 = 9;
const result = search(input1, input2);
console.log(`Index of ${input2} in array ${input1} is ${result}`);