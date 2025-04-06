// TWO SUM:
// ========

// Given an array of integers nums and an integer target. Return the indices(0 - indexed) of two elements in nums such that they add up to target.
// Each input will have exactly one solution, and the same element cannot be used twice. Return the answer in non-decreasing order.

// Input: nums = [1, 6, 2, 10, 3], target = 7
// Output: [0, 1]
// Explanation: nums[0] + nums[1] = 1 + 6 = 7

// TIME COMPLEXITY: O(N) + O(NxlogN), where N is size of the array. As the loop will run at most N times & sorting the array will take N * logN time complexity.
// SPACE COMPLEXITY: O(1) not using any extra space.
// Note: Here we are distorting the given array. So, if we need to consider this change, the space complexity will be O(N).
function twoSum(nums, target) {
    // TIME COMPLEXITY: O(N)
    // SPACE COMPLEXITY: O(N)
    // FASTER, Best for large inputs & optimized performance
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];


    // TIME COMPLEXITY: O(N) + O(NxlogN)
    // SPACE COMPLEXITY: O(N)
    // SLIGHLT SLOWER, When input is small or sorting is useful elsewhere
    // let ans = [-1, -1];

    // let eleIndex = [];
    // for (let i = 0; i < nums.length; i++) {
    //     eleIndex.push([nums[i], i]);
    // }
    // eleIndex.sort((a, b) => a[0] - b[0]);

    // let left = 0, right = n - 1;
    // while (left < right) {
    //     const sumVal = eleIndex[left][0] + eleIndex[right][0];
    //     if (sumVal === target) {
    //         ans[0] = eleIndex[left][1];
    //         ans[1] = eleIndex[right][1];
    //         return ans;
    //     } else if (sumVal < target) {
    //         left++;
    //     } else {
    //         right--;
    //     }
    // }

    // return ans;
}

const input1 = [1, 6, 2, 10, 3];
const input2 = 7;
const result = twoSum(input1, input2);
console.log('Indices of the sum', input2, 'in array', input1, 'are', result);


// INTERVIEW FOLLOW UP QUESTIONS:
// ------------------------------

// How would you handle multiple solutions?
    // If multiple solutions are allowed:
    // Continue moving the pointers inward even after finding a valid pair.
    // Store all valid pairs in a result list.

// How would you return the original indices after sorting?
    // While sorting, store the original indices as tuples (e.g., [(value, index)]). 
    // Use the sorted array to find the solution, and then map the indices back to their original positions.