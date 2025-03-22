// FIND MISSING NUMBER:
// ====================

// Given an integer array of size n containing distinct values in the range from 0 to n (inclusive), 
// return the only number missing from the array within this range.

// Input: nums = [0, 1, 2, 4, 5, 6]
// Output: 3
// Explanation: nums contains 0, 1, 2, 4, 5, 6 thus leaving 3 as the only missing number in the range [0, 6]

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
function missingNumber(nums) {
    // TIME COMPLEXITY: O(2n)
    // SPACE COMPLEXITY: O(n)

    // const arr = new Array(nums.length + 1).fill(0);
    // for (let i = 0; i < nums.length; i++) {
    //     arr[nums[i]]++;
    // }
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === 0) return i;
    // }

    // TIME COMPLEXITY: O(n)
    // SPACE COMPLEXITY: O(1)
    // const n = nums.length;
    // const sumTillN = (n * (n + 1)) / 2;
    // let sumOfElements = 0;

    // for (let i = 0; i < n; i++) {
    //     sumOfElements += nums[i];
    // }

    // return sumTillN - sumOfElements;

    // TIME COMPLEXITY: O(n)
    // SPACE COMPLEXITY: O(1)
    // This is slightly better because summing up the elements can exceed the integer limit, while XOR does not.
    let xor1 = 0;
    let xor2 = 0;

    for (let i = 0; i < nums.length ; i++) {
        xor1 ^= (i + 1);
        xor2 ^= nums[i];
    }

    return xor1 ^ xor2;
}

const input = [0, 1, 2, 4, 5, 6];
const result = missingNumber([...input]);
console.log(`Missing number in ${input} is ${result}`);