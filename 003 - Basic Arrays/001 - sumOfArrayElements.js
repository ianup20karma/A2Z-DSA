// SUM OF ARRAY ELEMENTS:
// ======================

// Given an array arr of size n, the task is to find the sum of all the elements in the array.

// Input: n = 5, arr = [1,2,3,4,5]
// Output: 15
// Explanation: Sum of all the elements is 1+2+3+4+5 = 15

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
function sumOfElements(arr, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    return sum;
}

const input = [1, 2, 3, 4, 5];
const result = sumOfElements(input, 5);
console.log(`Sum of elements in array ${input} is ${result}`);