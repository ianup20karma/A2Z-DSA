// SORT CHARACTERS BY FREQUENCY:
// =============================

// You are given a string s. Return the array of unique characters, sorted by highest to lowest occurring characters.
// If two or more characters have same frequency then arrange them in alphabetic order.

// Input: s = "tree"
// Output: ['e', 'r', 't' ]
// Explanation: The occurrences of each character are as shown below :
// e --> 2
// r --> 1
// t --> 1.
// The r and t have same occurrences , so we arrange them by alphabetic order.

// n = length of the string, k = constant 26 for the alphabet
// TIME COMPLEXITY: O(n + k log k)
// SPACE COMPLEXITY: O(k)
function frequencySort(s) {
    if (!s.length) return [];

    let freq = Array(26).fill(0).map((_, i) => [0, String.fromCharCode(i + 97)]);

    for (let ch of s) freq[ch.charCodeAt(0) - 97][0]++;

    freq.sort((a, b) => a[0] !== b[0] ? b[0] - a[0] : a[1].localeCompare(b[1]));

    let result = [];
    for (let [count, char] of freq) {
        if (count > 0) result.push(char);
    }

    return result;
}

const input = "tree";
const result = frequencySort(input);
console.log(`Sorted characters by frequency in ${input} is ${result}`);