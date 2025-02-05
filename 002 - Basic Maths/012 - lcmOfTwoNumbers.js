// LCM OF TWO NUMBERS:
// ===================

// You are given two integers n1 and n2. You need find the Lowest Common Multiple (LCM) of the two given numbers. Return the LCM of the two numbers.
// The Lowest Common Multiple (LCM) of two integers is the lowest positive integer that is divisible by both the integers.

// Input: n1 = 4, n2 = 6
// Output: 12
// Explanation: 4 * 3 = 12, 6 * 2 = 12.
// 12 is the lowest integer that is divisible both 4 and 6.

function LCM(n1, n2) {
    let lcm;

    let n = Math.max(n1, n2);
    let i = 1;

    while (true) {
        let mul = n * i;
        if (mul % n1 === 0 && mul % n2 === 0) {
            lcm = mul;
            break;
        }
        i++;
    }

    return lcm;
}