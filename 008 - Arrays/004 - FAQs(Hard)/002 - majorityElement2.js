// MAJORITY ELEMENT-II:
// ====================

// Given an integer array nums of size n. Return all elements which appear more than n/3 times in the array. The output can be returned in any order.

// Input: nums = [1, 2, 1, 1, 3, 2]
// Output: [1]
// Explanation: Here, n / 3 = 6 / 3 = 2.
// Therefore the elements appearing 3 or more times is : [1]

// TIME COMPLEXITY: O(N) + O(N), where N is size of the given array. The first O(N) is to calculate the counts and find the expected majority elements. 
// The second one is to check if the calculated elements are the majority ones or not.
// SPACE COMPLEXITY: O(1) for only using a list that stores a maximum of 2 elements. The space used is so small that it can be considered constant.
function majorityElementTwo(nums) {
}

const input = [1, 2, 1, 1, 3, 2, 2];
const result = majorityElementTwo(input);
console.log(`Elements appearing more than ${input.length / 3} times in the given array are: ${result}`);