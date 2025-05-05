// PASCAL'S TRIANGLE III:
// ======================

// Given an integer n, return the first n rows of Pascal's triangle.

// In Pascal's triangle:
//     The first row has one element with a value of 1.
//     Each row has one more element in it than its previous row.
//     The value of each element is equal to the sum of the elements directly above it when arranged in a triangle format.

// Input: n = 4
// Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]
// Explanation: The Pascal's Triangle is as follows:
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1st Row has its value set to 1.
// All other cells take their value as the sum of the values directly above them

// TIME COMPLEXITY: O(N^2), generating each row takes linear time relative to its size, and there are N rows, leading to a total time complexity of O(N^2).
// SPACE COMPLEXITY: O(N^2), storing the entire Pascal's Triangle requires space proportional to the sum of the first N natural numbers, resulting in O(N^2) space complexity.
function pascalTriangleIII(n) {
    const generateRow = (row) => {
        let ans = 1;
        let ansRow = [];
        ansRow.push(1);

        for (let col = 1; col < row; col++) {
            ans = ans * (row - col);
            ans = ans / col;
            ansRow.push(ans);
        }
        
        return ansRow;
    }

    let pascalTriangle = [];

    for (let row = 1; row <= n; row++) {
        pascalTriangle.push(generateRow(row));
    }

    return pascalTriangle;
}

const input = 4;
const result = pascalTriangleIII(input);
console.log("Pascal's Triangle upto", input, "th level is", result);