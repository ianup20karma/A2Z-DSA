// COUNT OF ODD NUMBERS IN ARRAY:
// ==============================

// Given an array of n elements. The task is to return the count of the number of odd in the array.

// Input: n = 5, array = [1,2,3,4,5]
// Output: 3
// Explanation: The three odd elements are (1,3,5).

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
function countOdd(arr, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 !== 0) sum += 1;
    }
    return sum;
}

const input = [1, 2, 3, 4, 5];
const result = countOdd(input, 5);
console.log('Count of Odd numbers in array', input, 'is', result);