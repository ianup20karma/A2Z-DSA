// 3 SUM:
// ======

// Given an integer array nums. Return all triplets such that:
//     i != j, i != k, and j != k
//     nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets. One element can be a part of multiple triplets. The output and the triplets can be returned in any order.

// Input: nums = [2, -2, 0, 3, -3, 5]
// Output: [[-2, 0, 2], [-3, -2, 5], [-3, 0, 3]]
// Explanation: nums[1] + nums[2] + nums[0] = 0
// nums[4] + nums[1] + nums[5] = 0
// nums[4] + nums[2] + nums[3] = 0

// TIME COMPLEXITY: O(NlogN)+O(N2), where N is size of the array. As the pointer i, is running for approximately N times. 
// And both the pointers j and k combined can run for approximately N times including the operation of skipping duplicates. 
// So the total time complexity will be O(N2).
// SPACE COMPLEXITY: O(1), no extra space is used.
function threeSum(nums) {
    // BRUTE FORCE:
    // TIME COMPLEXITY:	O(n³)
    // SPACE COPLEXITY: O(m), where m = number of unique triplets (at most O(n³) in worst case, but generally much smaller)
    // const tripletSet = new Set();
    // const n = nums.length;

    // for (let i = 0; i < n - 2; i++) {
    //     for (let j = i + 1; j < n - 1; j++) {
    //         for (let k = j + 1; k < n; k++) {
    //             if (nums[i] + nums[j] + nums[k] === 0) {
    //                 const temp = [nums[i], nums[j], nums[k]];
    //                 temp.sort((a, b) => a - b);
    //                 tripletSet.add(temp.join(','));
    //             }
    //         }
    //     }
    // }

    // let ans = Array.from(tripletSet).map(triplet => triplet.split(',').map(num => parseInt(num)));
    // return ans;



    // OPTIMIZED:
    // TIME COMPLEXITY: O(n²)
    // SPACE COMPLEXITY: O(n + m), where m = number of unique triplets
    // In the earlier solution, they used temp.join(',') to convert arrays to comma strings, 
    // which works — but it's more error-prone than JSON.stringify(), especially for negative or multi-digit numbers. 
    // So JSON.stringify() is more robust and semantically cleaner.
    // const tripletSet = new Set();
    // const n = nums.length;

    // for (let i = 0; i < n; i++) {
    //     const hashset = new Set();
    //     for (let j = i + 1; j < n; j++) {
    //         const third = -(nums[i] + nums[j]);
    //         if (hashset.has(third)) {
    //             const temp = [nums[i], nums[j], third];
    //             temp.sort((a, b) => a - b);
    //             tripletSet.add(JSON.stringify(temp));
    //         } else {
    //             hashset.add(nums[j]);
    //         }
    //     }
    // }
    // const ans = Array.from(tripletSet).map(triplet => JSON.parse(triplet));
    // return ans;



    // OPTIMAL (Fastest and cleanest):
    // TIME COMPLEXITY: O(n²)
    // SPACE COMPLEXITY: O(1)
    const ans = [];
    const n = nums.length;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

        let j = i + 1;
        let k = n - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];

            if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else {
                ans.push([nums[i], nums[j], nums[k]]);

                // Skip duplicates
                j++;
                k--;
                while(j < k && nums[j] === nums[j - 1]) j++;
                while(j < k && nums[k] === nums[k + 1]) k--;
            }
        }
    }

    return ans;
}

const input = [2, -2, 0, 3, -3, 5];
const result = threeSum([ ...input ]);
console.log('All Triplets whose sum is 0', 'in', input, 'are', result);


// INTERVIEW FOLLOW UP QUESTIONS:
// ------------------------------

// What if the input array is unsorted?
    // Sorting is part of the solution and is necessary for efficient implementation. 
    // It adds O ( nlogn ) complexity, which is negligible compared to the O ( n2 ) time required for finding triplets.

// How would you modify the algorithm to find all unique triplets with a sum equal to a different target?
    // Instead of finding triplets that sum to 0:
    // Look for triplets that sum to a given target t.
    // Use the same two-pointer approach, with nums[left]+nums[right]=t−nums[i].