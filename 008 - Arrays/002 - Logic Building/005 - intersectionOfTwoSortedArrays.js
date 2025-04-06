// INTERSECTION OF TWO SORTED ARRAYS:
// ==================================

// Given two sorted arrays nums1 and nums2, return an array containing the intersection of these two arrays.
// The intersection of two arrays is an array where all values are present in both arrays.

// Input: nums1 = [1, 2, 2, 3, 5], nums2 = [1, 2, 7]
// Output: [1, 2]
// Explanation: The elements 1, 2 are the only elements present in both nums1 and nums2

// TIME COMPLEXITY: O(m), where m is the length of that array which has less elements.
// SPACE COMPLEXITY: O(1), extra space to store answer is not considered.
function intersectionArray(nums1, nums2) {
    let i = 0, j = 0;
    const intersection = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) i++;
        else if (nums1[i] > nums2[j]) j++;
        else {
            // When only unique elements are needed
            // if (intersection.length === 0 || intersection[intersection.length - 1] !== nums1[i]) {
            //     intersection.push(nums1[i]);
            // }
            // When duplicate elements should be preserved
            intersection.push(nums1[i]);
            i++;
            j++;
        }
    }

    return intersection;
}

const input1 = [1, 2, 2, 3, 5];
const input2 = [1, 2, 7];
const result = intersectionArray([...input1], [...input2]);
console.log('Intersection of array', input1, '&', input2, 'is', result);


// INTERVIEW FOLLOW UP QUESTIONS:
// ------------------------------

// How would you handle unsorted arrays?
    // For unsorted arrays:
    // Sort both arrays first O ( mlogm+nlogn ).
    // Apply the two-pointer technique to find the intersection.