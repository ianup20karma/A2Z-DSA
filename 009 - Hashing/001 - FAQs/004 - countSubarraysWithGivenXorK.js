// COUNT SUBARRAYS WITH GIVEN XOR K:
// =================================

// Given an array of integers nums and an integer k, return the total number of subarrays whose XOR equals to k.

// Input : nums = [4, 2, 2, 6, 4], k = 6
// Output : 4
// Explanation : The subarrays having XOR of their elements as 6 are [4, 2],  [4, 2, 2, 6, 4], [2, 2, 6], and [6]

// TIME COMPLEXITY: O(N) or O(NxlogN), where N is the size of the array. 
// If we use an unordered_map in C++, the time complexity is O(N). 
// However, with a map data structure, the time complexity is O(NxlogN). 
// In the worst case for an unordered_map, the searching time can increase to O(N), making the overall time complexity O(N2).

// SPACE COMPLEXITY: O(N), as we are using a map data structure.
function subarraysWithXorK(nums, k) {
}

const input1 = [5, 6, 7, 8, 9];
const input2 = 5;
const result = subarraysWithXorK(input1, input2);
console.log(`Total number of sub-arrays with XOR ${input2} in array ${input1} is ${result}`);