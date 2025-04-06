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
console.log('Index of', input2, 'in', input1, 'is', result, 'using Linear Search');


// INTERVIEW FOLLOW UP QUESTIONS:
// ------------------------------

// How would you modify the function to return all indices of the target instead of just the smallest?
    // To return all indices: Traverse the array completely, even after finding the first occurrence. 
    // Use a list to store indices of all occurrences of the target.

    // Example:
    // nums = [1, 2, 3, 2, 4], target = 2
    // Output: [1, 3]

// How can linear search be optimized for specific scenarios?
    // Linear search can be optimized for: If a specific target appears frequently, 
    // keep track of its last found index to start the search from there in subsequent searches. 
    // If the array is partially sorted or has a specific pattern, consider stopping early when certain conditions are met.