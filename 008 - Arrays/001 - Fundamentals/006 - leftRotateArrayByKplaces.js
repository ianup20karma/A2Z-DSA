// LEFT ROTATE ARRAY BY K PLACES:
// ==============================

// Given an integer array nums and a non-negative integer k, rotate the array to the left by k steps.

// Input: nums = [3, 4, 1, 5, 3, -5], k = 8
// Output: nums = [1, 5, 3, -5, 3, 4]
// Explanation: rotate 1 step to the left: [4, 1, 5, 3, -5, 3]
// rotate 2 steps to the left: [1, 5, 3, -5, 3, 4]
// rotate 3 steps to the left: [5, 3, -5, 3, 4, 1]
// rotate 4 steps to the left: [3, -5, 3, 4, 1, 5]
// rotate 5 steps to the left: [-5, 3, 4, 1, 5, 3]
// rotate 6 steps to the left: [3, 4, 1, 5, 3, -5]
// rotate 7 steps to the left: [4, 1, 5, 3, -5, 3]
// rotate 8 steps to the left: [1, 5, 3, -5, 3, 4]

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(k)
function rotateArray(nums, k) {
    const temp = [], n = nums.length;
    k = Math.floor(k % n);

    const reverseArray = (nums, start, end) => {
        for (let i = start, j = end; i < j; i++, j--) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }

    // BRUTE FORCE APPROACH
    // for (let i = 0; i < k; i++) {
    //     temp.push(nums[i]);
    // }

    // for (let i = k; i < n; i++) {
    //     nums[i - k] = nums[i];
    // }

    // for (let i = n - k; i < n; i++) {
    //     nums[i] = temp[i - (n - k)];
    // }

    // OPTIMAL
    // Time Complexity slightly increases at the cost of space saving
    reverseArray(nums, 0, k - 1);
    reverseArray(nums, k, n - 1);
    reverseArray(nums, 0, n - 1);

    return nums;
}

const input1 = [3, 4, 1, 5, 3, -5];
const input2 = 8;
const result = rotateArray([...input1], input2);
console.log('Array', input1, 'after', input2, 'rotation is', result);


// INTERVIEW FOLLOW UP QUESTIONS:
// ------------------------------

// Can this logic be extended to multidimensional arrays?
    // Yes, but for 2D arrays (e.g., matrices), rotation involves more complex transformations:
    //     For left rotation, each row/column is treated as a separate 1D array and rotated individually.
    //     For k>1, the process must account for overlapping boundaries in 2D structures.

// What’s the difference between rotation by k and shuffling?
    // Rotation shifts elements in a structured, cyclic order, preserving their relative positions. 
    // Shuffling, on the other hand, rearranges elements randomly without preserving order. 
    // Rotation is deterministic, whereas shuffling introduces randomness.