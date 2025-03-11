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
console.log(`Array [${input}] after moving zeroes to the end - [${result}]`);