// INTERSECTION OF TWO SORTED ARRAYS:
// ==================================

// Given two sorted arrays nums1 and nums2, return an array containing the intersection of these two arrays.
// The intersection of two arrays is an array where all values are present in both arrays.

// Input: nums1 = [1, 2, 2, 3, 5], nums2 = [1, 2, 7]
// Output: [1, 2]
// Explanation: The elements 1, 2 are the only elements present in both nums1 and nums2

// TIME COMPLEXITY: O(m), where m is the length of that array which has less elements.
// SPACE COMPLEXITY: O(1), extra space to store answer is not considered.
function intersectionArray(nums) {}

const input1 = [1, 2, 2, 3, 5];
const input2 = [1, 2, 7];
const result = intersectionArray([...input1], [...input2]);
console.log(`Intersection of array [${input1}] & [${input2}] is [${result}]`);