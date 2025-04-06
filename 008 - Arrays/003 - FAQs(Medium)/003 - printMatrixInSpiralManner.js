// PRINT THE MATRIX IN SPIRAL MANNER:
// ==================================

// Given an M * N matrix, print the elements in a clockwise spiral manner. Return an array with the elements in the order of their appearance when printed in a spiral manner.

// Input: matrix = [[1, 2, 3], [4 ,5 ,6], [7, 8, 9]]
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
// Explanation: The elements in the spiral order are 1, 2, 3 -> 6, 9 -> 8, 7 -> 4, 5

// TIME COMPLEXITY: O(m*n), since all the elements are being traversed once.
// SPACE COMPLEXITY: O(1), extra space to store answer is not considered.
function spiralOrder(matrix) {
    const ans = [];
    let n = matrix.length, m = matrix[0].length;

    let top = 0, left = 0;
    let bottom = n - 1, right = m - 1;

    // Traverse the matrix in spiral order
    while (top <= bottom && left <= right) {
        // Traverse from left to right
        for (let i = left; i <= right; i++) {
            ans.push(matrix[top][i]);
        }
        top++;

        // Traverse from top to bottom
        for (let i = top; i <= bottom; ++i) {
            ans.push(matrix[i][right]);
        }
        right--;

        // Traverse from right to left
        if (top <= bottom) {
            for (let i = right; i >= left; --i) {
                ans.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // Traverse from bottom to top
        if (left <= right) {
            for (let i = bottom; i >= top; --i) {
                ans.push(matrix[i][left]);
            }
            left++;
        }
    }

    return ans;
}

const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const result = spiralOrder(input);
console.log('Matrix', input, 'in spiral manner -', result);