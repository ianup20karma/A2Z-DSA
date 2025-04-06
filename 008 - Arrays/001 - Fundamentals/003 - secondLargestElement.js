// SECOND LARGEST ELEMENT:
// =======================

// Given an array of integers nums, return the second-largest element in the array. 
// If the second-largest element does not exist, return -1.

// Input: nums = [8, 8, 7, 6, 5]
// Output: 7
// Explanation: The largest value in nums is 8, the second largest is 7

// TIME COMPLEXITY: O(nlogn)
// SPACE COMPLEXITY: O(1)
function secondLargestElement(nums) {
    if (nums.length < 2) return -1;

    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        } else if (nums[i] > secondLargest && nums[i] != largest) {
            secondLargest = nums[i];
        }
    }

    return secondLargest == -Infinity ? -1 : secondLargest;
}

const input = [8, 8, 7, 6, 5];
const result = secondLargestElement(input);
console.log('Second Largest Element in', input, 'is', result);