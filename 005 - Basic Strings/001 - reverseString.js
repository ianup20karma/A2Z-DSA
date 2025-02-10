// REVERSE A STRING:
// =================

// Given a string, the task is to reverse it. The string is represented by an array of characters s. Perform the reversal in place with O(1) extra memory.

// Input : s = ["h", "e" ,"l" ,"l" ,"o"]
// Output : ["o", "l", "l", "e", "h"]
// Explanation : The given string is s = "hello" and after reversing it becomes s = "olleh".

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
function reverseString(s) {
    let start = 0, end = s.length - 1;

    while(start < end) {
        [s[start], s[end]] = [s[end], s[start]];
        start++;
        end--;
    }

    return s;
}

const input = ["h", "e" ,"l" ,"l" ,"o"];
const result = reverseString(input);
console.log(`Reverse of ${input} is ${result}`);