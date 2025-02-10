// LCM OF TWO NUMBERS:
// ===================

// You are given two integers n1 and n2. You need find the Lowest Common Multiple (LCM) of the two given numbers. Return the LCM of the two numbers.
// The Lowest Common Multiple (LCM) of two integers is the lowest positive integer that is divisible by both the integers.

// Input: n1 = 4, n2 = 6
// Output: 12
// Explanation: 4 * 3 = 12, 6 * 2 = 12.
// 12 is the lowest integer that is divisible both 4 and 6.

// TIME COMPLEXITY: O(log(min(n1, n2)))
// SPACE COMPLEXITY: O(1)
function LCM(n1, n2) {
    const findGCD = (n1, n2) => {
        while (n1 > 0 && n2 > 0) {
            if (n1 > n2) { n1 = n1 % n2; }
            else { n2 = n2 % n1; }
        }

        if (n1 === 0) return n2;
        return n1;
    }

    let gcd = findGCD(n1, n2);
    let lcm = (n1 * n2) / gcd;
    return lcm;
}

const input1 = 3;
const input2 = 5;
const result = LCM(input1, input2);
console.log(`LCM of ${input1} & ${input2} is ${result}`);