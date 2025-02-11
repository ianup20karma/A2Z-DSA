// SELECTION SORT:
// ===============

// Given an array of integers nums, sort the array in non-decreasing order using the selection sort algorithm and return the sorted array.
// A sorted array in non-decreasing order is an array where each element is greater than or equal to all previous elements in the array.

// Input: nums = [7, 4, 1, 5, 3]
// Output: [1, 3, 4, 5, 7]
// Explanation: 1 <= 3 <= 4 <= 5 <= 7.
// Thus the array is sorted in non-decreasing order.

// TIME COMPLEXITY: O(n^2) as loop runs through each element of the array
// SPACE COMPLEXITY: O(1) as it is an in-place sorting algorithm
function selectionSort(n) {
}

const input = [7, 4, 1, 5, 3];
const result = selectionSort(input);
console.log(`Sorted Array using Selection Sort - ${result}`);
