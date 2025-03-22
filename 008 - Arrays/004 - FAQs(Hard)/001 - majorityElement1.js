// MAJORITY ELEMENT-I:
// ===================

// Given an integer array nums of size n, return the majority element of the array.
// The majority element of an array is an element that appears more than n/2 times in the array. The array is guaranteed to have a majority element.

// Input: nums = [7, 0, 0, 1, 7, 7, 2, 7, 7]
// Output: 7
// Explanation: The number 7 appears 5 times in the 9 sized array

// TIME COMPLEXITY: O(N) + O(N), where N is size of the given array. The first O(N) is to calculate the count and find the expected majority element. 
// The second one is to check if the expected element is the majority one or not.
// SPACE COMPLEXITY: O(1) no extra space used.
function majorityElement(nums) {
}

const input = [7, 0, 0, 1, 7, 7, 2, 7, 7];
const result = majorityElement(input);
console.log(`The number ${result} appears more than ${input.length / 2} times in the given array`);