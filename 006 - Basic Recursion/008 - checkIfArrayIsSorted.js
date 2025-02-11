// CHECK IF THE ARRAY IS SORTED:
// =============================

// Given an array nums of n integers, return true if the array nums is sorted in non-decreasing order or else false.

// Input: nums = [1, 2, 3, 4, 5]
// Output: true
// Explanation: For all i (1 <= i <= 4) it holds nums[i] <= nums[i+1], hence it is sorted and we return true.

// TIME COMPLEXITY: O(sqrt(N))
// Because the helper function makes a recursive call for each element in the array, moving from the beginning to the end of the array.
// SPACE COMPLEXITY: O(sqrt(N))
// Due to the recursion stack. Each recursive call adds a new frame to the call stack, and in the worst case, there will be n frames on the stack (one for each call).
function isSorted(nums) {
  if (nums.length <= 1) return true;

  const sort = (nums, left, right) => {
    if (right >= nums.length) return true;
    if (nums[left] > nums[right]) return false;
    return sort(nums, left + 1, right + 1);
  }

  return sort(nums, 0, 1);
}

const input = [1, 2, 3, 4, 5];
const result = isSorted([...input]);
console.log(`Array [${input}] is ${result ? "already" : "not"} sorted.`);
