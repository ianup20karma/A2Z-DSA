// QUICK SORT:
// ===========

// INTUITION:
    // Quick Sort is a divide-and-conquer algorithm like Merge Sort. However, unlike Merge Sort, Quick Sort does not use an extra array for sorting (though it uses an auxiliary stack space). This makes Quick Sort slightly better than Merge Sort from a space perspective.

    // This algorithm follows two simple steps repeatedly:
    //     Pick a pivot and place it in its correct position in the sorted array.
    //     Move smaller elements (i.e., smaller than the pivot) to the left of the pivot and larger ones to the right.

    // To summarize: The main goal is to place the pivot at its final position in each recursion call, where it should be in the final sorted array.

// APPROACH:
    // To implement Quick Sort, we will create two functions: quickSort() and partition().

    // quickSort(arr[], low, high)
    //     Initial Setup: The low pointer points to the first index, and the high pointer points to the last index of the array.
    //     Partitioning: Use the partition() function to get the index where the pivot should be placed after sorting. This index, called the partition index, separates the left and right unsorted subarrays.
    //     Recursive Calls: After placing the pivot at the partition index, recursively call quickSort() for the left and right subarrays. The range of the left subarray will be [low to partition index - 1] and the range of the right subarray will be [partition index + 1 to high].
    //     Base Case: The recursion continues until the range becomes 1.

    // partition(arr[], low, high)
    //     Select pivot (e.g., arr[low]).
    //     Use pointers i (low) and j (high). Move i forward to find element > pivot, and j backward to find element < pivot. Ensure i <= high - 1 and j >= low + 1.
    //     If i < j, swap arr[i] and arr[j].
    //     Continue until j < i.
    //     Swap pivot (arr[low]) with arr[j] and return j as partition index.

    // This approach ensures that Quick Sort efficiently sorts the array using the divide-and-conquer strategy.


// PROBLEM STATEMENT:
    // Given an array of integers called nums, sort the array in non-decreasing order using the quick sort algorithm and return the sorted array.
    // A sorted array in non-decreasing order is an array where each element is greater than or equal to all preceding elements in the array.

// Input: nums = [7, 4, 1, 5, 3]
// Output: [1, 3, 4, 5, 7]
// Explanation: 1 <= 3 <= 4 <= 5 <= 7.
// Thus the array is sorted in non-decreasing order.

// TIME COMPLEXITY: O(nlogn) - at each step, we divide the whole array, which takes logN steps, and n steps are taken for the partition() function
    // Worst Case - O(n^2) - when the pivot is the greatest or smallest element of the array
// SPACE COMPLEXITY: O(1) + O(n) auxiliary stack space
function quickSort(nums) {
}

const input = [7, 4, 1, 5, 3];
const result = quickSort(input);
console.log(`Sorted Array using Bubble Sort - [${result}]`);


// INTERVIEW FOLLOW UP QUESTIONS:
// ------------------------------

// CAN QUICK SORT BE MADE STABLE?
//     Quick sort is inherently unstable because the partitioning step involves swapping elements, which can disrupt the relative order of duplicate elements.
//     Use extra memory to track original indices.
//     Modify the partitioning process to preserve the order of equal elements.

// HOW DOES QUICK SORT PARTITION THE ARRAY, AND WHY IS IT CRITICAL?
    // Partitioning is the core of quick sort. It rearranges the array so that all elements smaller than the pivot appear before it, and all larger elements appear after it. This ensures the pivot is placed in its correct position. The process enables quick sort to recursively sort smaller subarrays.

    // Example:
    // Input: [4, 2, 9, 1] with pivot = 4.
    // Partitioning results in: [2, 1], [4], [9].
    // Now the pivot (4) is correctly positioned in the sorted array.