// COUNT INVERSIONS:
// =================

// Given an integer array nums. Return the number of inversions in the array.

// Two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.
    // It indicates how close an array is to being sorted.
    // A sorted array has an inversion count of 0.
    // An array sorted in descending order has maximum inversion.

// Input: nums = [2, 3, 7, 1, 3, 5]
// Output: 5
// Explanation: The responsible indexes are:
// nums[0], nums[3], values: 2 > 1 & indexes: 0 < 3
// nums[1], nums[3], values: 3 > 1 & indexes: 1 < 3
// nums[2], nums[3], values: 7 > 1 & indexes: 2 < 3
// nums[2], nums[4], values: 7 > 3 & indexes: 2 < 4
// nums[2], nums[5], values: 7 > 5 & indexes: 2 < 5

// TIME COMPLEXITY: O(NxlogN), where N is size of the given array. We are not changing the merge sort algorithm except by adding a variable to it. 
// So, the time complexity is as same as the merge sort.
// SPACE COMPLEXITY: O(N), in the merge sort there is use a temporary array to store elements in sorted order.
function numberOfInversions(nums) {
}

const input = [2, 3, 7, 1, 3, 5];
const result = numberOfInversions(input);
console.log(`The number of inversions in the given array ${input} are: ${result}`);