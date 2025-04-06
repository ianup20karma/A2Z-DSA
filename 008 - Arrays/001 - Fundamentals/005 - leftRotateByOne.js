// LEFT ROTATE ARRAY BY ONE:
// =========================

// Given an integer array nums, rotate the array to the left by one.
// Note: There is no need to return anything, just modify the given array.

// Input: nums = [1, 2, 3, 4, 5]
// Output: [2, 3, 4, 5, 1]
// Explanation: Initially, nums = [1, 2, 3, 4, 5]
// Rotating once to left -> nums = [2, 3, 4, 5, 1]

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
function rotateArrayByOne(nums) {
    const temp = nums[0];

    for (let i = 1; i < nums.length; i++) {
        nums[i - 1] = nums[i];
    }

    nums[nums.length - 1] = temp;
    return nums;
}

const input = [1, 2, 3, 4, 5];
const result = rotateArrayByOne([...input]);
console.log('Array', input, 'after one rotation is', result);


// INTERVIEW FOLLOW UP QUESTIONS:
// ------------------------------

// How would the algorithm handle multidimensional arrays?
    // For multidimensional arrays (e.g., matrices), rotation involves more complex transformations:
    //     Shifting rows or columns depending on the axis of rotation.
    //     Similar logic but reversed.

// What is the difference between in-place rotation and using extra space?
    // Rearranges elements directly in the original array without using additional memory. 
    //     It is more space-efficient but often requires more careful handling of indices.
    // Creates a temporary array to hold shifted elements, simplifying the process but increasing memory usage.