// LARGEST ELEMENT:
// ================

// Given an array of integers nums, return the value of the largest element in the array

// Input: nums = [3, 3, 0, 99, -40]
// Output: 99
// Explanation: The largest element in array is 99

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
function largestElement(nums) {
    let maxValue = nums && nums.length && nums[0];
    for (let i = 0; i < nums.length; i++) {
        maxValue = Math.max(maxValue, nums[i]);
    }
    return maxValue;
}

const input = [3, 3, 0, 99, -40];
const result = largestElement(input);
console.log('Largest Element in', input, 'is', result);