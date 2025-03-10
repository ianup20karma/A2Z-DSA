// BUBBLE SORT:
// ===============

// INTUITION:
//     The bubble sort algorithm sorts an array by repeatedly swapping adjacent elements if they are in the wrong order. 
//     The largest elements "bubble" to the end of the array with each pass.

// APPROACH:
//     Run a loop i from 0 to n-1.
//     Run a nested loop from j from 0 to n-i-1.
//     If arr[j] > arr[j+1], swap them.
//     Continue until the array is sorted.

// Note: Here, after each iteration, the array becomes sorted up to the last index of the range. 
// That is why the last index of the range decreases by 1 after each iteration. This decrement is managed by the outer loop, where the last index is represented by the variable i. 
// The inner loop (variable j) helps to push the maximum element of the range [0...i] to the last index (i.e., index i).


// PROBLEM STATEMENT:
    // Given an array of integers called nums,sort the array in non-decreasing order using the bubble sort algorithm and return the sorted array.
    // A sorted array in non-decreasing order is an array where each element is greater than or equal to all preceding elements in the array.

// Input: nums = [7, 4, 1, 5, 3]
// Output: [1, 3, 4, 5, 7]
// Explanation: 1 <= 3 <= 4 <= 5 <= 7.
// Thus the array is sorted in non-decreasing order.

// TIME COMPLEXITY: O(n^2) - worst case, O(n) - best case
// SPACE COMPLEXITY: O(1) as it is an in-place sorting algorithm
function bubbleSort(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        let isSwapped = false;
        for (let j = 0; j <= i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                isSwapped = true;
            };
        }
        if (!isSwapped) break;
    }

    return nums;
}

const input = [7, 4, 1, 5, 3];
const result = bubbleSort([...input]);
console.log(`Array [${input}] sorted using Bubble Sort - [${result}]`);


// INTERVIEW FOLLOW UP QUESTIONS:
// ------------------------------

// CAN YOU MODIFY BUBBLE SORT TO SORT IN DESCENDING ORDER?
    // To sort in descending order, modify the comparison condition to check if the current element is smaller than the next element. Swap them if so.

    // Example:
    // Input: [4, 2, 9, 1]
    // Process:
    // Compare 4 and 2 → No swap.
    // Compare 2 and 9 → Swap: [4, 9, 2, 1].
    // Continue until sorted in descending order: [9, 4, 2, 1].

// HOW DOES BUBBLE SORT COMPARE TO INSERTION SORT AND SELECTION SORT?
    // Time Complexity: All three have a worst-case time complexity of O(n^2). However, bubble sort generally performs worse due to its many comparisons and swaps.
    // Optimization: Bubble sort can be optimized to terminate early for sorted arrays, while insertion and selection sorts do not inherently have this feature.
    // Stability: Both bubble and insertion sorts are stable (preserve the order of duplicate elements). Selection sort is not stable unless modified.