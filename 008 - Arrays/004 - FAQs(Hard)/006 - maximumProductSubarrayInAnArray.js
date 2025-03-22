// MAXIMUM PRODUCT SUBARRAY IN AN ARRAY:
// =====================================

// Given an integer array nums. Find the subarray with the largest product, and return the product of the elements present in that subarray.
// A subarray is a contiguous non-empty sequence of elements within an array.

// Input: nums = [4, 5, 3, 7, 1, 2]
// Output: 840
// Explanation: The largest product is given by the whole array itself

// TIME COMPLEXITY: O(N), where N is the size of the array
// Traversing the given array using single for loop takes linear time.
// SPACE COMPLEXITY: O(1), as only couple of variables are used.
function maxProduct(nums) {
}

const input = [4, 5, 3, 7, 1, 2];
const result = maxProduct(input);
console.log(`The product of the elements in the subarray with the largest product in ${input} is: ${result}`);