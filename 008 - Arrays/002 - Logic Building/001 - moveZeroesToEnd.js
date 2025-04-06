// MOVE ZEROS TO END:
// ==================

// Given an integer array nums, move all the 0's to the end of the array. 
// The relative order of the other elements must remain the same. This must be done in place, without making a copy of the array.

// Input: nums = [0, 1, 4, 0, 5, 2]
// Output: [1, 4, 5, 2, 0, 0]
// Explanation: Both the zeroes are moved to the end and the order of the other elements stay the same

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
function moveZeroes(nums) {
    const n = nums.length;
    let j = -1;

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            j = i;
            break;
        }
    }

    if (j === -1) return nums;

    for (let i = j + 1; i < n; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[j++]] = [nums[j], nums[i]];
        }
    }

    return nums;
}

const input = [0, 1, 4, 0, 5, 2];
const result = moveZeroes([...input]);
console.log('Array', input, 'after moving zeroes to the end -', result);


// INTERVIEW FOLLOW UP QUESTIONS:
// ------------------------------

// How would you modify the algorithm to move all zeros to the beginning instead?
    // To move zeros to the beginning:
        // Iterate through the array from right to left.
        // Shift non-zero elements to the rightmost available position, and place zeros at the beginning.
        // This maintains the relative order of non-zero elements.

// How can you adapt this algorithm for other conditions, like moving all negative numbers to the end?
    // Instead of checking for zeros, modify the condition to identify negative numbers. 
    // Use the same two-pointer approach to shift non-negative numbers to the front while maintaining their order.