// CHECK IF THE ARRAY IS SORTED:
// =============================

// Given an array arr of size n, the task is to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order. 
// If the array is sorted then return True, else return False.

// Input: n = 5, arr = [1,2,3,4,5]
// Output: True
// Explanation: The given array is sorted i.e Every element in the array is smaller than or equals to its next values, So the answer is True.

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
function arraySortedOrNot(arr, n) {
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        };
    }
    return true;
}

const input = [1, 2, 3, 4, 5];
const result = arraySortedOrNot(input, 5);
console.log(`Array [${input}] is ${result ? "Sorted" : "not Sorted"}`);