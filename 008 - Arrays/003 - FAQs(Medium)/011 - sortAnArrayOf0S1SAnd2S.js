// SORT AN ARRAY OF 0'S 1'S AND 2'S:
// =================================

// Given an array nums consisting of only 0, 1, or 2. Sort the array in non-decreasing order. The sorting must be done in-place, without making a copy of the original array.

// Input: nums = [1, 0, 2, 1, 0]
// Output: [0, 0, 1, 1, 2]
// Explanation: The nums array in sorted order has 2 zeroes, 2 ones and 1 two

// TIME COMPLEXITY: O(N), where N is the size of the array, as there is single traversal of the array.
// SPACE COMPLEXITY: O(1), no extra space is used.
function sortZeroOneTwo(nums) {
    // BRUTE FORCE:
    // Overwrites values in the original array.
    // TIME COMPLEXITY: O(N), (2 passes)
    // SPACE COMPLEXITY: O(1), no extra space is used.
    // let cnt0 = 0, cnt1 = 0, cnt2 = 0;
    // const n = nums.length;

    // for (let i = 0; i < n; i++) {
    //     if (nums[i] === 0) cnt0++;
    //     else if (nums[i] === 1) cnt1++;
    //     else cnt2++;
    // }

    // for (let i = 0; i < cnt0; i++) nums[i] = 0;
    // for (let i = cnt0; i < cnt0 + cnt1; i++) nums[i] = 1;
    // for (let i = cnt0 + cnt1; i < n; i++) nums[i] = 2;

    // return nums;

    // OPTIMAL (Efficient):
    // Dutch National Flag Algorithm (DNF) - 3-way partitioning.
    // Swaps elements in the original array to sort it in-place.
    // TIME COMPLEXITY: O(N), (1 pass)
    // SPACE COMPLEXITY: O(1)
    let low = 0, mid = 0, high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }

    return nums;
}

const input = [1, 0, 2, 1, 0];
const result = sortZeroOneTwo([...input]);
console.log("Array", input, "sorted of 0's 1's and 2's -", result);


// INTERVIEW FOLLOW UP QUESTIONS:
// ------------------------------

// Can this algorithm be extended to sort arrays with more than three distinct values?
    // Yes, the algorithm can be generalized to sort arrays with more than three distinct values by extending the partitioning logic. 
    // However, for more than three distinct values, other sorting algorithms like quicksort or mergesort may be more appropriate.


// What if the array is partially sorted?
    // The algorithm performs the same operations regardless of whether the array is partially sorted. 
    // It will still complete in O ( n ) time, but fewer swaps may be required, improving practical performance slightly.