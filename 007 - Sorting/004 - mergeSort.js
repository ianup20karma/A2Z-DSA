// MERGE SORT:
// ===========

// INTUITION:
    // Merge Sort is a powerful sorting algorithm that follows the divide-and-conquer approach. The array is divided into two equal halves until each sub-array contains only one element. 
    // Each pair of smaller sorted arrays is then merged into a larger sorted array.

    // The algorithm consists of two main functions:
    //     merge():This function merges the two halves of the array, assuming both parts are already sorted.
    //     mergeSort():This function divides the array into 2 parts: low to mid and mid+1 to high where, low is the leftmost index of the array, high is the rightmost index of the array, and mid is the middle index of the array.

    // By repeating these steps recursively, Merge Sort efficiently sorts the entire array.

// APPROACH:
    // To implement Merge Sort, we will create two functions: mergeSort() and merge().

    // mergeSort(arr[], low, high)
    //     Divide the Array: Split the given array into two halves by splitting the range. For any range from low to high, the splits will be low to mid and mid+1 to high, where mid = (low + high) / 2. This process continues until the range size is 1.
    //     Recursive Division: In mergeSort(), divide the array around the middle index by making recursive calls: mergeSort(arr, low, mid) for the left half and mergeSort(arr, mid+1, high) for the right half. Here, low is the leftmost index, high is the rightmost index, and mid is the middle index of the array.
    //     Base Case: To complete the recursive function, define the base case. The recursion ends when the array has only one element left, meaning low and high are the same, pointing to a single element. If low >= high, the function returns.

    // merge(arr[], low, mid, high)
    //     Use a temporary array to store the elements of the two sorted halves after merging. The range of the left half is from low to mid and the range of the right half is from mid+1 to high.
    //     Use two pointers, left starting from low and right starting from mid+1. Using a while loop (while left <= mid && right <= high), compare the elements from each half and insert the smaller one into the temporary array. After the loop, any leftover elements in both halves are copied into the temporary array.
    //     Transfer the elements from the temporary array back to the original array in the range low to high.

    // This approach ensures that the array is efficiently sorted using the divide-and-conquer strategy of Merge Sort.


// PROBLEM STATEMENT:
//     Given an array of integers, nums,sort the array in non-decreasing order using the merge sort algorithm. Return the sorted array.
//     A sorted array in non-decreasing order is one in which each element is either greater than or equal to all the elements to its left in the array.

// Input: nums = [7, 4, 1, 5, 3]
// Output: [1, 3, 4, 5, 7]
// Explanation: 1 <= 3 <= 4 <= 5 <= 7.
// Thus the array is sorted in non-decreasing order.

// TIME COMPLEXITY: O(nlogn) - at each step, we divide the whole array, which takes logn steps, and we assume n steps are taken to sort the array
// SPACE COMPLEXITY: O(n) - we are using a temporary array to store elements in sorted order.
function mergeSort(nums) {
    const merge = (arr, low, mid, high) => {
        let temp = [], left = low, right = mid + 1;
        while (left <= mid && right <= high) temp.push(arr[left] <= arr[right] ? arr[left++] : arr[right++]);

        while (left <= mid) temp.push(arr[left++]);
        while (right <= high) temp.push(arr[right++]);

        for (let i = low; i <= high; i++) arr[i] = temp[i - low];
    }

    const mergeSortHelper = (arr, low, high) => {
        if (low >= high) return;

        let mid = Math.floor((low + high) / 2);
        mergeSortHelper(arr, low, mid);
        mergeSortHelper(arr, mid + 1, high);
        merge(arr, low, mid, high);
    }

    mergeSortHelper(nums, 0, nums.length - 1);
    return nums;
}

const input = [7, 4, 1, 5, 3];
const result = mergeSort(input);
console.log(`Sorted Array using Merge Sort - [${result}]`);


// INTERVIEW FOLLOW UP QUESTIONS:
// ------------------------------

// CAN MERGE SORT BE IMPLEMENTED IN-PLACE? IF NOT, WHY?
//     Standard merge sort is not in-place because merging two sorted arrays requires additional memory to combine them. However, there are in-place variations of merge sort, but they are complex and trade simplicity and performance for reduced memory usage.

// WHY IS MERGE SORT PREFERRED FOR LINKED LISTS?
    // Linked lists do not support random access, making quicksort inefficient.
    // Merge sort efficiently splits linked lists into halves using pointers without needing extra space for copying.
    // Merging two sorted linked lists can be done in O ( n ) without additional memory overhead.

    // Example:
    // Input: 4 → 2 → 9 → 1
    // Process:
    // Split into 4 → 2 and 9 → 1.
    // Sort each half: 2 → 4 and 1 → 9.
    // Merge: 1 → 2 → 4 → 9.