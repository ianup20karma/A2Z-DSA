// INSERTION SORT:
// ===============

// INTUITION:
    // Insertion sort builds a sorted array one element at a time by repeatedly picking the next element and inserting it into its correct position within the already sorted part of the array.

// APPROACH:
    // In each iteration, select an element from the unsorted part of the array using an outer loop.
    // Place this element in its correct position within the sorted part of the array.
    // Use an inner loop to shift the remaining elements as necessary to accommodate the selected element. This involves swapping elements until the selected element is in its correct position.
    // Continue this process until the entire array is sorted.


// PROBLEM STATEMENT:
//     Given an array of integers called nums, sort the array in non-decreasing order using the insertion sort algorithm and return the sorted array.
//     A sorted array in non-decreasing order is an array where each element is greater than or equal to all preceding elements in the array.

// Input: nums = [7, 4, 1, 5, 3]
// Output: [1, 3, 4, 5, 7]
// Explanation: 1 <= 3 <= 4 <= 5 <= 7.
// Thus the array is sorted in non-decreasing order.

// TIME COMPLEXITY: O(n^2) - worst case, O(n) - best case
// SPACE COMPLEXITY: O(1) as it is an in-place sorting algorithm
function insertionSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        let j = i;
        while (j > 0 && nums[j - 1] > nums[j]) {
            [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
            j--;
        }
    }
    return nums;
}

const input = [7, 4, 1, 5, 3];
const result = insertionSort([...input]);
console.log(`Array [${input}] sorted using Insertion Sort - [${result}]`);


// INTERVIEW FOLLOW UP QUESTIONS:
// ------------------------------

// HOW CAN INSERTION SORT BE OPTIMIZED?
    // Use binary search to find the correct position for the key in the sorted portion. While this reduces comparisons to O(logn), the shifting operation still takes O(n), so the overall complexity remains O(n^2).

// IS INSERTION SORT PRACTICAL FOR REAL-WORLD APPLICATIONS?
    // Insertion sort is rarely used for large datasets but is practical for Online Sorting, It is effective for dynamic datasets where elements are added incrementally, as it can quickly re-sort the array.

    // Example:
    // Sorting a deck of cards, where new cards are added one at a time.