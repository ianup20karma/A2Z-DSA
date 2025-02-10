// SECOND HIGHEST OCCURRING ELEMENT IN AN ARRAY:
// =============================================

// Given an array of n integers, find the second most frequent element in it. 
// If there are multiple elements that appear a maximum number of times, find the smallest of them. 
// If second most frequent element does not exist return -1.

// Input: arr = [4, 4, 5, 5, 6, 7]
// Output: 6
// Explanation: Both 6 and 7 appear second most times, but 6 is smaller.

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(n)
function secondMostFrequentElement(nums) {
    let freq = {};
    let maxFreq = -1, maxElement = -1;
    let secondMaxFreq = -1, secondMaxElement = -1;

    for (let i = 0; i < nums.length; i++) {
        freq[nums[i]] = (freq[nums[i]] || 0) + 1;
    }

    const keys = Object.keys(freq);
    for (let i = 0; i < keys.length; i++) {
        let num = parseInt(keys[i], 10)
        let count = freq[num];

        if (count > maxFreq) {
            secondMaxFreq = maxFreq;
            secondMaxElement = maxElement;
            maxFreq = count;
            maxElement = num;
        } else if (count === maxFreq) {
            maxElement = Math.min(maxElement, num);
        } else if (count > secondMaxFreq) {
            secondMaxFreq = count;
            secondMaxElement = num;
        } else if (count === secondMaxFreq) {
            secondMaxElement = Math.min(secondMaxElement, num);
        }
    }

    return secondMaxElement;
}

const input = [4, 4, 5, 5, 6, 7];
const result = secondMostFrequentElement(input, 5);
console.log(`Second Highest Occuring Element in Array [${input}] is ${result}`);