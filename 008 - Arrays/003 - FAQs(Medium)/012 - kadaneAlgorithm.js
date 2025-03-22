// KADANE'S ALGORITHM:
// ===================

// Given an integer array nums, find the subarray with the largest sum and return the sum of the elements present in that subarray.
// A subarray is a contiguous non-empty sequence of elements within an array.

// Input: nums = [2, 3, 5, -2, 7, -4]
// Output: 15
// Explanation: The subarray from index 0 to index 4 has the largest sum = 15

// TIME COMPLEXITY: O(N) for single traversal, here N is the size of the array.
// SPACE COMPLEXITY: O(1), for not using any extra space.
function maxSubArray(nums) {
    let maxi = -Infinity; 
    let sum = 0; 
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]; 
        
        if (sum > maxi) {
            maxi = sum; 
        }

        if (sum < 0) {
            sum = 0; 
        }
    }

    return maxi;
}

const input1 = [2, 3, 5, -2, 7, -4];
const result1 = maxSubArray(input);
console.log(`The largest sum in a subarray = ${result1}`);

// FOLLOW UP QUESTION
// Can you print the subarray that has the max sum ?

// TIME COMPLEXITY: O(N), for using a single loop running N times, where N is the size of the array.
// SPACE COMPLEXITY: O(1), for not using any extra space.
function maxSumSubArray(nums) {
    let maxi = -Infinity; 
    let sum = 0; 
    let start = 0; 
    let ansStart = -1, ansEnd = -1; 

    for (let i = 0; i < nums.length; i++) {
        if (sum === 0) {
            start = i;
        }

        sum += nums[i]; 

        if (sum > maxi) {
            maxi = sum;
            ansStart = start;
            ansEnd = i;
        }

        if (sum < 0) {
            sum = 0;
        }
    }
    
    let output = "The subarray is: [";
    for (let i = ansStart; i <= ansEnd; i++) {
        output += nums[i] + " ";
    }
    output += "]";
    console.log(output);

    return maxi;
}

const input2 = [2, 3, 5, -2, 7, -4];
const result2 = maxSumSubArray(input2);