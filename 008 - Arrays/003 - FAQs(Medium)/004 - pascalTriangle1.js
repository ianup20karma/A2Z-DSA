// PASCAL'S TRIANGLE I:
// ====================

// Given two integers r and c, return the value at the rth row and cth column in a Pascal's Triangle.

// In Pascal's triangle:
//     The first row has one element with a value of 1.
//     Each row has one more element in it than its previous row.
//     The value of each element is equal to the sum of the elements directly above it when arranged in a triangle format.

// Input: r = 4, c = 2
// Output: 3
// Explanation: The Pascal's Triangle is as follows:
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// ....
// Thus, value at row 4 and column 2 = 3

// TIME COMPLEXITY: O(c), where C is the column number. This is because the loop in the nCr function runs for a total of C times, where C can be as large as N/2.
// SPACE COMPLEXITY: O(1), as no extra space is used.
function pascalTriangleI(r, c) {
}

const input1 = 4;
const input2 = 2;
const result = pascalTriangleI(input1, input2);
console.log(`Value at row ${input1} & column ${input2} in Pascal's Triangle is ${result}`);