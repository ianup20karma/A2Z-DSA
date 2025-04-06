// ROTATE MATRIX BY 90 DEGREES:
// ============================

// Given an N * N 2D integer matrix, rotate the matrix by 90 degrees clockwise.
// The rotation must be done in place, meaning the input 2D matrix must be modified directly.

// Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: matrix = [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

// TIME COMPLEXITY: O(N2) +O(N2), to linearly iterate and find transpose of the matrix and another O(N2) to find the reverse of each row.
// SPACE COMPLEXITY: O(1), as no extra space is being used.
function rotateMatrix(matrix) {
}

const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const result = rotateMatrix(structuredClone(input));
console.log('Matrix', input, 'after 90 degree rotation -', result);