// SELECTION SORT:
// ===============

// INTUITION:
    // The selection sort algorithm sorts an array by repeatedly finding the minimum element from the unsorted part and putting it at the beginning. 
    // The largest element will end up at the last index of the array.

// APPROACH:
    // Select the starting index of the unsorted part using a loop with i from 0 to n-1.
    // Find the smallest element in the range from i to n-1 using an inner loop.
    // Swap this smallest element with the element at index i.
    // Repeat the process for the next starting index.


// PROBLEM STATEMENT:
    // Given an array of integers nums, sort the array in non-decreasing order using the selection sort algorithm and return the sorted array.
    // A sorted array in non-decreasing order is an array where each element is greater than or equal to all previous elements in the array.

// Input: nums = [7, 4, 1, 5, 3]
// Output: [1, 3, 4, 5, 7]
// Explanation: 1 <= 3 <= 4 <= 5 <= 7.
// Thus the array is sorted in non-decreasing order.

// TIME COMPLEXITY: O(n^2) as loop runs through each element of the array
// SPACE COMPLEXITY: O(1) as it is an in-place sorting algorithm
function selectionSort(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) minIndex = j;
        }
        if (minIndex !== i) [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]];
    }

    return nums;
}

const input = [7, 4, 1, 5, 3];
const result = selectionSort([...input]);
console.log('Array', input, 'sorted using Selection Sort -', result);


// INTERVIEW FOLLOW UP QUESTIONS:
// ------------------------------

// CAN YOU MODIFY THE SELECTION SORT ALGORITHM TO SORT THE ARRAY IN DESCENDING ORDER? WHAT CHANGES WOULD YOU MAKE?
    // To sort the array in descending order, you need to modify the algorithm to find the largest element in the unsorted portion during each iteration instead of the smallest. Then, place this largest element at the current position in the sorted portion.
    // Here’s the adjusted approach:
    // In the inner loop, compare elements to find the maximum instead of the minimum.
    // Swap the maximum element with the current index of the sorted portion.

    // Example:
    // Input: [4, 2, 9, 1]
    // Process:
    // Find the largest (9) and swap with the first element: [9, 2, 4, 1].
    // Find the next largest (4) in the unsorted portion and swap: [9, 4, 2, 1].
    // Continue until sorted in descending order: [9, 4, 2, 1].
    // This change preserves the same O ( n2 ) time complexity but adapts the algorithm for descending order.

// SELECTION SORT HAS O (N^2) TIME COMPLEXITY. CAN YOU IDENTIFY A SCENARIO WHERE SELECTION SORT MIGHT STILL BE A PREFERRED CHOICE?
    // 1. Selection sort works in-place and uses O(1) extra memory. For systems with strict memory limitations, it is a viable choice.
    // 2. For small arrays (e.g., fewer than 10 elements), the simplicity of selection sort can outweigh its inefficiency. The overhead of more complex algorithms, like merge sort or quicksort, might not be justified.

    // Example:
    // Sorting [5, 2, 1] in embedded systems with limited RAM can efficiently use selection sort.

// HOW DOES SELECTION SORT COMPARE TO INSERTION SORT IN TERMS OF PERFORMANCE AND USE CASES? CAN YOU ANALYZE AND CONTRAST THEM?
    // Time Complexity: Both have O(n^2) worst-case time complexity. However, insertion sort can outperform selection sort for nearly sorted arrays because it minimizes shifts, while selection sort always performs n−1 comparisons in the inner loop, regardless of the array's state.
    // Swaps vs. Shifts: Selection sort minimizes swaps (n−1 swaps in total), making it suitable for situations where swap costs are high (e.g., flash memory). Insertion sort involves more shifts, especially for large unsorted portions.

    // Example:
    // For an array like [2, 3, 4, 5, 1], insertion sort will quickly sort it with fewer operations because most elements are already in place. In contrast, selection sort performs the same number of comparisons regardless of the initial order, making it less efficient in this case.