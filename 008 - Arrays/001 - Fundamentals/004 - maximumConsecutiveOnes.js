// MAXIMUM CONSECUTIVE ONES:
// =========================

// Given a binary array nums, return the maximum number of consecutive 1s in the array.
// A binary array is an array that contains only 0s and 1s.

// Input: nums = [1, 1, 0, 0, 1, 1, 1, 0]
// Output: 3
// Explanation: The maximum consecutive 1s are present from index 4 to index 6, amounting to 3 1s

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
function findMaxConsecutiveOnes(nums) {
    let maxConsec = 0, consec = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            consec += 1;
            maxConsec = Math.max(maxConsec, consec);
        }
        else consec = 0;
    }

    return maxConsec;
}

const input = [1, 1, 0, 0, 1, 1, 1, 0];
const result = findMaxConsecutiveOnes(input);
console.log('Maximum Consecutive Ones in', input, 'is', result);