// LEFT ROTATE ARRAY BY K PLACES:
// ==============================

// Given an integer array nums and a non-negative integer k, rotate the array to the left by k steps.

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
const result = rotateArray(input1, input2);
console.log(`Array after ${input2} rotation is ${result}`);