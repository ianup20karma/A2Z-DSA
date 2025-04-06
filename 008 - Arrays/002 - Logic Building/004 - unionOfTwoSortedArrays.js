// UNION OF TWO SORTED ARRAYS:
// ===========================

// Given two sorted arrays nums1 and nums2, return an array that contains the union of these two arrays. The elements in the union must be in ascending order.
// The union of two arrays is an array where all values are distinct and are present in either the first array, the second array, or both.

// Input: nums1 = [1, 2, 3, 4, 5], nums2 = [1, 2, 7]
// Output: [1, 2, 3, 4, 5, 7]
// Explanation: The elements 1, 2 are common to both, 3, 4, 5 are from nums1 and 7 is from nums2

// TIME COMPLEXITY: O(m+n), because both the arrays must be traversed once.
// SPACE COMPLEXITY: O(m+n)
// The auxiliary space used is O(1) as no extra space is used. 
// However, considering the space for returning the output, the overall space complexity will be O(M+N).
function unionArray(nums1, nums2) {
    let i = 0, j = 0;
    const union = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) { 
            if (union.length === 0 || union[union.length - 1] !== nums1[i]) {
                union.push(nums1[i]);
            }
            i++;
        } else { 
            if (union.length === 0 || union[union.length - 1] !== nums2[j]) {
                union.push(nums2[j]);
            }
            j++;
        }
    }

    while (i < nums1.length) {
        if (union.length === 0 || union[union.length - 1] !== nums1[i]) {
            union.push(nums1[i]);
        }
        i++;
    }

    while (j < nums2.length) {
        if (union.length === 0 || union[union.length - 1] !== nums2[j]) {
            union.push(nums2[j]);
        }
        j++;
    }

    return union;
}

const input1 = [1, 2, 3, 4, 5];
const input2 = [1, 2, 7];
const result = unionArray([...input1], [...input2]);
console.log('Union of array', input1, '&', input2, 'is', result);
