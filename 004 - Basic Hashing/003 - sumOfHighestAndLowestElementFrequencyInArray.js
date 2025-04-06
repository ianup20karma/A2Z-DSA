// SUM OF HIGHEST AND LOWEST FREQUENCY:
// =============================================

// Given an array of n integers, find the sum of the frequencies of the highest occurring number and lowest occurring number.

// Input: arr = [1, 2, 2, 3, 3, 3]
// Output: 4
// Explanation: The highest frequency is 3 (element 3), and the lowest frequency is 1 (element 1). Their sum is 3 + 1 = 4.

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(n)
function sumHighestAndLowestFrequency(nums) {
    let frequencies = {};
    let maxFreq = 1, minFreq = nums.length;

    for (let i = 0; i < nums.length; i++) {
        frequencies[nums[i]] = (frequencies[nums[i]] || 0) + 1;
    }

    for (let freq of Object.values(frequencies)) {
        maxFreq = Math.max(maxFreq, freq);
        minFreq = Math.min(minFreq, freq);
    }

    return maxFreq + minFreq;
}

const input = [4, 4, 5, 5, 6, 7];
const result = sumHighestAndLowestFrequency(input, 5);
console.log("Sum of Highest & Lowest Element's Frequency in Array", input, 'is', result);