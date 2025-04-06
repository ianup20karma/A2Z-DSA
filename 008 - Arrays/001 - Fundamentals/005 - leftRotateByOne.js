// LEFT ROTATE ARRAY BY ONE:
// =========================

// Given an integer array nums, rotate the array to the left by one.
// Note: There is no need to return anything, just modify the given array.

// Input: nums = [1, 2, 3, 4, 5]
// Output: [2, 3, 4, 5, 1]
// Explanation: Initially, nums = [1, 2, 3, 4, 5]
// Rotating once to left -> nums = [2, 3, 4, 5, 1]

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
function rotateArrayByOne(nums) {
    const temp = nums[0];

    for (let i = 1; i < nums.length; i++) {
        nums[i - 1] = nums[i];
    }

    nums[nums.length - 1] = temp;
    return nums;
}

const input = [1, 2, 3, 4, 5];
const result = rotateArrayByOne([...input]);
console.log('Array', input, 'after one rotation is', result);