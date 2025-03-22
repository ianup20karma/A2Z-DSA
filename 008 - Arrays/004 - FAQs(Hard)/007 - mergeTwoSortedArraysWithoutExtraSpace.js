// MERGE TWO SORTED ARRAYS WITHOUT EXTRA SPACE:
// ============================================

// Given two integer arrays nums1 and nums2. Both arrays are sorted in non-decreasing order.

// Merge both the arrays into a single array sorted in non-decreasing order.
//     The final sorted array should be stored inside the array nums1 and it should be done in-place.
//     nums1 has a length of m + n, where the first m elements denote the elements of nums1 and rest are 0s.
//     nums2 has a length of n.

// Input: nums1 = [-5, -2, 4, 5], nums2 = [-3, 1, 8]
// Output: [-5, -3, -2, 1, 4, 5, 8]
// Explanation: The merged array is: [-5, -3, -2, 1, 4, 5, 8], where [-5, -2, 4, 5] are from nums1 and [-3, 1, 8] are from nums2

// TIME COMPLEXITY: O(min(N, M)) + O(NxlogN) + O(MxlogM), where N and M are the sizes of the given arrays. 
// O(min(N, M)) is for swapping the array elements. And O(NxlogN) and O(MxlogM) are for sorting the two arrays.
// SPACE COMPLEXITY: O(1) as no additional space is used apart from the input array.
function merge(nums1, m, nums2, n) {
}

const input1 = [-5, -2, 4, 5];
const input2 = [-3, 1, 8];
const result = merge([...input], input.length, [...input2], input2.length);
console.log(`Sorted merged array from ${input1} and ${input2} is: ${result}`);