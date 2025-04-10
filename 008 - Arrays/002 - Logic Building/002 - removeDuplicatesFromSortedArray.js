// REMOVE DUPLICATES FROM SORTED ARRAY:
// ====================================

// Given an integer array nums sorted in non-decreasing order, remove all duplicates in-place so that each unique element appears only once. 
// Return the number of unique elements in the array.

// If the number of unique elements be k, then,
//     Change the array nums such that the first k elements of nums contain the unique values in the order that they were present originally.
//     The remaining elements, as well as the size of the array does not matter in terms of correctness.

// An array sorted in non-decreasing order is an array where every element to the right of an element is either equal to or greater in value than that element.

// Input: nums = [-2, 2, 4, 4, 4, 4, 5, 5]
// Output: [-2, 2, 4, 5, _, _, _, _]
// Explanation: There are 4 distinct elements in nums and the elements marked as _ can have any value.

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
function removeDuplicates(nums) {
    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) nums[++i] = nums[j];
    }

    return i + 1;
}

const input = [-2, 2, 4, 4, 4, 4, 5, 5];
const result = removeDuplicates([...input]);
console.log('Array', input, 'after removing duplicates -', result);


// INTERVIEW FOLLOW UP QUESTIONS:
// ------------------------------

// How would the solution change if the array was not sorted?
    // If the array was unsorted, the sorted property could not be used to identify duplicates in one pass. Instead:
    // Sort the array first (O ( nlogn )), then apply the two-pointer technique.
    // Alternatively, use a hash set to track seen elements, but this would require O ( n ) extra space.