// PASCAL'S TRIANGLE II:
// =====================

// Given an integer r, return all the values in the rth row in Pascal's Triangle in correct order.

// In Pascal's triangle:
//     The first row has one element with a value of 1.
//     Each row has one more element in it than its previous row.
//     The value of each element is equal to the sum of the elements directly above it when arranged in a triangle format.

// Input: r = 4
// Output: [1, 3, 3, 1]
// Explanation: The Pascal's Triangle is as follows:
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// ....
// Thus the 4th row is [1, 3, 3, 1]

// TIME COMPLEXITY: O(R), where R is the given row number.
// A simple loop is used that runs R times and performs constant time oprations in each iteration resulting in a linear time complexity.
// SPACE COMPLEXITY: O(1), as no extra space is used.
// Note that if the space used to return the row is considered, the space complexity will be O(R) as the space used to store the row is proportional to the row number.
function pascalTriangleII(r) {
    let ans = new Array(r).fill(0);

    ans[0] = 1;

    for (let i = 1; i < r; i++) {
        ans[i] = (ans[i - 1] * (r - i)) / i;
    }

    return ans;
}

const input = 4;
const result = pascalTriangleII(input);
console.log(input, "th row in Pascal's Triangle is", result);