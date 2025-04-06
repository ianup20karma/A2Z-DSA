// LEADERS IN AN ARRAY:
// ====================

// Given an integer array nums, return a list of all the leaders in the array.

// A leader in an array is an element whose value is strictly greater than all elements to its right in the given array. 
// The rightmost element is always a leader. The elements in the leader array must appear in the order they appear in the nums array.

// Input: nums = [1, 2, 5, 3, 1, 2]
// Output: [5, 3, 2]
// Explanation: 2 is the rightmost element, 3 is the largest element in the index range [3, 5], 5 is the largest element in the index range [2, 5]

// TIME COMPLEXITY: O(n), where n is the length of the array.
// SPACE COMPLEXITY: O(1), extra space to store answer is not considered.
function leaders(nums) {
    const ans = [];
    if (nums.length === 0) return ans;

    let max = nums[nums.length - 1];
    ans.push(max);

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] > max) {
            ans.push(nums[i]);
            max = nums[i];
        }
    }

    return ans.reverse();
}

const input = [1, 2, 5, 3, 1, 2];
const result = leaders(input);
console.log('Leaders in array', input, 'are', result);


// INTERVIEW FOLLOW UP QUESTIONS:
// ------------------------------

// How would you handle an unsorted list with duplicate elements?
    // The presence of duplicate elements does not change the logic. 
    // The algorithm still traverses from right to left and checks if the current element is greater than the maximum seen so far. 
    // Only elements that strictly satisfy this condition are added to the leader list.


// What if the array is circular?
    // For a circular array, you would need to iterate over the array twice (once normally and once wrapping around). 
    // Adjust the comparison logic to handle the circular property, ensuring no duplicates are considered as leaders.