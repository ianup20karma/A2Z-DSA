// REVERSE AN ARRAY:
// =================

// Given an array arr of n elements. The task is to reverse the given array. The reversal of array should be inplace.

// Input: n = 5, arr = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Explanation: The reverse of the array [1,2,3,4,5] is [5,4,3,2,1]

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
function reverse(arr, n) {
    const reversedArray = [];
    for (let i = n - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

const input = [1, 2, 3, 4, 5];
const result = reverse(input, 5);
console.log(`Reverse of array ${input} is ${result}`);