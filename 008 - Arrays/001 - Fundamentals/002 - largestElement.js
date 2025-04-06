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


// INTERVIEW FOLLOW UP QUESTIONS:
// ------------------------------

// How would you handle an empty array or invalid input?
//     Check if the array is empty at the beginning. If it is, return a specific value (e.g., None) or raise an error.

//     Example:
//     nums = []
//     Output: None or raise a "ValueError: Array is empty"


// How would you modify the algorithm to return both the largest element and its index?
//     Use a loop to track both the value and the index of the largest element. 
//     Update the index whenever the largest value is updated.

//     Example:
//     nums = [1, 3, 5, 2]
//     Output: (5, 2) (Value = 5, Index = 2)