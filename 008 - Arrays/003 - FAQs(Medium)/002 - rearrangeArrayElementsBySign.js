// REARRANGE ARRAY ELEMENTS BY SIGN:
// =================================

// Given an integer array nums of even length consisting of an equal number of positive and negative integers.Return the answer array in such a way that the given conditions are met:
//     Every consecutive pair of integers have opposite signs.
//     For all integers with the same sign, the order in which they were present in nums is preserved.
//     The rearranged array begins with a positive integer.

// Input : nums = [2, 4, 5, -1, -3, -4]
// Output : [2, -1, 4, -3, 5, -4]
// Explanation: The positive number 2, 4, 5 maintain their relative positions and -1, -3, -4 maintain their relative positions

// TIME COMPLEXITY: O(n), where n is the length of the array.
// SPACE COMPLEXITY: O(1), extra space to store answer is not considered.
function rearrangeArray(nums) {
    const ans = [];
    let posIdx = 0,
        negIdx = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            ans[posIdx] = nums[i];
            posIdx += 2;
        } else {
            ans[negIdx] = nums[i];
            negIdx += 2;
        }
    }

    return ans;
}

const input = [2, 4, 5, -1, -3, -4];
const result = rearrangeArray(input);
console.log(`Array ${input} after re-arrangements by sign - ${result}`);