// VALID ANAGRAM:
// ==============

// Given a string s, representing a large integer, the task is to return the largest-valued odd integer (as a string) that is a substring of the given string s.
// The number returned should not have leading zero's. But the given input string may have leading zero.

// Input: s = "anagram" , t = "nagaram"
// Output: true
// Explanation: We can rearrange the characters of string s to get string t as frequency of all characters from both strings is same.

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
function anagramStrings(s, t) {
    if (s.length !== t.length) return false;

    let count = new Array(26).fill(0);
    for (let c of s) count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    for (let c of t) count[c.charCodeAt(0) - 'a'.charCodeAt(0)]--;

    for (let i of count) {
        if (i !== 0) return false;
    }

    return true;
}

const input1 = "anagram";
const input2 = "nagaram";
const result = anagramStrings(input1, input2);
console.log(`${input2} is ${result ? "an anagram" : "not an anagram"} of ${input1}`);