// ISOMORPHIC STRING:
// ==================

// Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. 
// No two characters may map to the same character, but a character may map to itself.

// Input: s = "egg" , t = "add"
// Output: true
// Explanation: The 'e' in string s can be replaced with 'a' of string t.
// The 'g' in string s can be replaced with 'd' of t.
// Hence all characters in s can be replaced to get t.

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(k) O(1) - since the space used by the arrays is constant (256 fixed size) regardless of input size
function isomorphicString(s, t) {
    if (s.length !== t.length) return false;

    let mapST = new Array(256).fill(0);
    let mapTS = new Array(256).fill(0);

    for (let i = 0; i < s.length; i++) {
        let charS = s.charCodeAt(i);
        let charT = t.charCodeAt(i);

        if (mapST[charS] !== mapTS[charT]) return false;

        mapST[charS] = i + 1;
        mapTS[charT] = i + 1;
    }

    return true;
}

const input1 = "egg";
const input2 = "add";
const result = isomorphicString(input1, input2);
console.log(`${input1} & ${input2} is ${result ? "Isomorphic" : "Not Isomorphic"}`);