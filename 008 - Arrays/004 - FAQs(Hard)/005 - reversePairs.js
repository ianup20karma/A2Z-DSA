// REVERSE PAIRS:
// ==============

// Given an integer array nums. Return the number of reverse pairs in the array.

// An index pair (i, j) is called a reverse pair if:
//     0 <= i < j < nums.length
//     nums[i] > 2 * nums[j].

// Input: nums = [6, 4, 1, 2, 7]
// Output: 3
// Explanation: The reverse pairs are:
// (0, 2) : nums[0] = 6, nums[2] = 1, 6 > 2 * 1
// (0, 3) : nums[0] = 6, nums[3] = 2, 6 > 2 * 2
// (1, 2) : nums[1] = 4, nums[2] = 1, 4 > 2 * 1

// TIME COMPLEXITY: O(2N * logN), where N is size of the given array.
// Inside the mergeSort() we call merge() and countPairs() except mergeSort() itself. 
// Now, inside the function countPairs(), though we are running a nested loop, we are actually iterating the left half once and the right half once in total.
// That is why, the time complexity is O(N). And the merge() function also takes O(N). The mergeSort() takes O(logN) time complexity. 
// Therefore, the overall time complexity will be O(logN x (N+N)) = O(2NxlogN)

// SPACE COMPLEXITY: O(N), as in the merge sort, a temporary array to store elements in sorted order is used.
function reversePairs(nums) {
}

const input = [6, 4, 1, 2, 7];
const result = reversePairs(input);
console.log(`Number of reverse pairs in the given array ${input} are: ${result}`);