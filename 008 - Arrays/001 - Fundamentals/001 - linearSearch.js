// LINEAR SEARCH:
// ==============

// Given an array of integers nums and an integer target, find the smallest index (0 based indexing) where the target appears in the array. 
// If the target is not found in the array, return -1

// Input: nums = [2, 3, 4, 5, 3], target = 3
// Output: 1
// Explanation: The first occurence of 3 in nums is at index 1

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
function linearSearch(nums, target) {
    if (nums.length == 0 && !target) return -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) return i;
    }
    return -1;
}

const input1 = [2, 3, 4, 5, 3];
const input2 = 3;
const result = linearSearch(input1, input2);
console.log(`Index of ${input2} in ${input1} is ${result} using Linear Search`);