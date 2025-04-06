// HIGHEST OCCURRING ELEMENT IN AN ARRAY:
// ======================================

// Given an array of n integers, find the most frequent element in it i.e., the element that occurs the maximum number of times. 
// If there are multiple elements that appear a maximum number of times, find the smallest of them.

// Input: arr = [4, 4, 5, 5, 6]
// Output: 4
// Explanation: Both 4 and 5 appear twice, but 4 is smaller. So, 4 is the most frequent element.

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(n)
function mostFrequentElement(nums) {
    let freq = {};
    let maxFreq = 0, maxElement = 0;

    for (let i = 0; i < nums.length; i++) {
        freq[nums[i]] = (freq[nums[i]] || 0) + 1;
        let count = freq[nums[i]];

        if (count > maxFreq) {
            maxFreq = count;
            maxElement = nums[i];
        } else if (count == maxFreq) {
            maxElement = Math.min(maxElement, nums[i]);
        }
    }

    return maxElement;
}

const input = [4, 4, 5, 5, 6];
const result = mostFrequentElement(input, 5);
console.log('Highest Occuring Element in Array', input, 'is', result);