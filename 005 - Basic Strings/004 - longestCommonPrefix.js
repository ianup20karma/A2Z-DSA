// LONGEST COMMON PREFIX:
// ======================

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Input: str = ["flowers" , "flow" , "fly", "flight" ]
// Output: "fl"
// Explanation: All strings given in array contains common prefix "fl".

// n = number of strings, m = minimum length of a string
// sorting = O(N * log N), comparison of characters in the first and last strings = O(m)
// TIME COMPLEXITY:  O(n * log n + m)
// SPACE COMPLEXITY: O(m)
function longestCommonPrefix(strs) {
    let result = "";
    if (!strs.length) return result;
    strs.sort();
    let first = strs[0], last = strs[strs.length - 1];

    for (let i = 0; i < Math.min(first.length, last.length); i++) {
        if (first[i] === last[i]) {
            result += first[i];
        } else break;
    }

    return result;
}

const input = ["flowers", "flow", "fly", "flight"];
const result = longestCommonPrefix(input);
console.log('Longest Common Prefix in', input, 'is', result ? result : '');