// REVERSE AN ARRAY:
// =================

// Given an array nums of n integers, return reverse of the array.

// Input: nums = [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

// TIME COMPLEXITY: O(N) because we perform a constant-time swap operation for each element pair.
// SPACE COMPLEXITY: O(sqrt(N)) due to the recursion stack.
function reverseArray(nums) {
  const reverse = (nums, left, right) => {
    if (left >= right) { return nums; }
    [nums[left], nums[right]] = [nums[right], nums[left]];
    return reverse(nums, left + 1, right - 1);
  }

  return reverse(nums, 0, nums.length - 1);
}

const input = [1, 2, 3, 4, 5];
const result = reverseArray([ ...input ]);
console.log('Reverse of array', input, 'is', result);
