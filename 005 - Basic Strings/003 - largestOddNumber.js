// LARGEST ODD NUMBER IN A STRING:
// ===============================

// Given a string s, representing a large integer, the task is to return the largest-valued odd integer (as a string) that is a substring of the given string s.
// The number returned should not have leading zero's. But the given input string may have leading zero.

// Input: s = "0214638"
// Output: "21463"
// Explanation: The different odd numbers that can be formed by the given string are --> 1, 3, 21, 63, 463, 1463, 21463.
// We cannot include 021463 as the number contains leading zero. So largest odd number in given string is 21463.

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
function largeOddNum(s) {
    let ind = -1;

    let i = 0;
    for (i = s.length - 1; i >= 0; i--) {
        if ((s[i] - "0") % 2 == 1) {
            ind = i;
            break;
        }
    }

    i = 0;
    while (i <= s.length && s[i] == "0") i++;

    return s.slice(i, ind + 1);
}

const input = "0214638";
const result = largeOddNum(input);
console.log(`Largest Odd Number in ${input} is ${result}`);