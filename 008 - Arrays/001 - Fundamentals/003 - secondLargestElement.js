// SECOND LARGEST ELEMENT:
// =======================

// Given an array of integers nums, return the second-largest element in the array. 
// If the second-largest element does not exist, return -1.

// Input: nums = [8, 8, 7, 6, 5]
// Output: 7
// Explanation: The largest value in nums is 8, the second largest is 7

// TIME COMPLEXITY: O(nlogn)
// SPACE COMPLEXITY: O(1)
function secondLargestElement(nums) {
    if (nums.length < 2) return -1;

    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        } else if (nums[i] > secondLargest && nums[i] != largest) {
            secondLargest = nums[i];
        }
    }

    return secondLargest == -Infinity ? -1 : secondLargest;
}

const input = [8, 8, 7, 6, 5];
const result = secondLargestElement(input);
console.log('Second Largest Element in', input, 'is', result);



// INTERVIEW FOLLOW UP QUESTIONS:
// ------------------------------

// How would you handle finding the second-largest element in a stream of data?
//     For a stream of data (where elements arrive one at a time): Maintain two variables, 
//     largest and second_largest, initialized to -∞.Update these variables dynamically as new elements arrive.

//     Example:
//     [2, 5, 1, 8, 3]
//     Process: Start with largest = −∞, second_largest = −∞.
//     After processing the stream: largest = 8, second_largest = 5.

// Can you solve this problem using a different approach, such as heap data structures?
    // Yes, a min-heap of size 2 can be used to maintain the two largest elements: Insert the first two elements into the heap. For each new element, compare it with the smallest element in the heap. If it is larger, replace the smallest element. At the end, the heap will contain the two largest elements.

    // Example:
    // nums = [3, 1, 4, 2] Heap after processing: [3, 4]
    // Output: 3 (second-largest element).