// PRINT THE MATRIX IN SPIRAL MANNER:
// ==================================

// Given an M * N matrix, print the elements in a clockwise spiral manner. Return an array with the elements in the order of their appearance when printed in a spiral manner.

// Input: matrix = [[1, 2, 3], [4 ,5 ,6], [7, 8, 9]]
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
// Explanation: The elements in the spiral order are 1, 2, 3 -> 6, 9 -> 8, 7 -> 4, 5

// TIME COMPLEXITY: O(m*n), since all the elements are being traversed once.
// SPACE COMPLEXITY: O(1), extra space to store answer is not considered.
function spiralOrder(matrix) {
}

const input = [[1, 2, 3], [4 ,5 ,6], [7, 8, 9]];
const result = spiralOrder(input);
console.log(`Matrix ${input} in spiral manner - ${result}`);