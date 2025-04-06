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


// INTERVIEW FOLLOW UP QUESTIONS:
// ------------------------------

// How would you handle unsorted input arrays?
    // If the input arrays are unsorted:
    // Sort each array first O ( mlogm ) and O ( nlogn )).
    // Apply the two-pointer approach or merge logic.
    // This approach would have an overall time complexity of O ( mlogm+nlogn+m+n ).


// How would you extend this to handle k sorted arrays?
    // To handle k sorted arrays:
    // Use a min-heap to merge the arrays.
    // Push the smallest element of each array into the heap.
    // Extract the minimum element, add it to the result, and push the next element from the same array into the heap.
    // This has a time complexity of O ( Nlogk ), where N is the total number of elements.