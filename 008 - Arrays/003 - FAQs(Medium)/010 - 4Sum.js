// 4 SUM:
// ======

// Given an integer array nums and an integer target. Return all quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
//     a, b, c, d are all distinct valid indices of nums.
//     nums[a] + nums[b] + nums[c] + nums[d] == target.

// Notice that the solution set must not contain duplicate quadruplets. One element can be a part of multiple quadruplets. The output and the quadruplets can be returned in any order.

// Input: nums = [1, -2, 3, 5, 7, 9], target = 7
// Output: [[-2, 1, 3, 5]]
// Explanation: nums[1] + nums[0] + nums[2] + nums[3] = 7

// TIME COMPLEXITY: O(N3), as each of the pointers i and j, is running for approximately N times. 
// And both the pointers k and l combined can run for approximately N times including the operation of skipping duplicates. 
// So the total time complexity will be O(N3). Here N is size of the array.

// SPACE COMPLEXITY: O(no. of quadruplets), this space is only used to store the answer. 
// No extra space is used to solve this problem. So, from that perspective, space complexity can be written as O(1).
function fourSum(nums, target) {
    // BRUTE FORCE:
    // TIME COMPLEXITY:	O(n^4) for using 4 nested loops, where N is size of the array.
    // SPACE COPLEXITY: O(2 * m) where m = no. of the quadruplets, for using a set data structure and a list to store the quads.

    // const resultSet = new Set();
    // const n = nums.length;

    // for (let i = 0; i < n; i++) {
    //     for (let j = 0; j < n; j++) {
    //         for (let k = 0; k < n; k++) {
    //             for (let l = 0; l < n; l++) {
    //                 if (i !== j && i !== k && i !== l && j !== k && j !== l && k !== l) {
    //                     const sum = nums[i] + nums[j] + nums[k] + nums[l];
    
    //                     if (sum === target) {
    //                         const temp = [nums[i], nums[j], nums[k], nums[l]];
    //                         temp.sort((a, b) => a - b);
    //                         resultSet.add(temp.join(','));
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }

    // const ans = Array.from(resultSet).map(item => item.split(',').map(Number));
    // return ans;



    // OPTIMIZED:
    // TIME COMPLEXITY: O(n^3)
    // SPACE COMPLEXITY: O(n + m), where m = number of unique quadruplets

    // const n = nums.length;
    // const quadSet = new Set();

    // for (let i = 0; i < n; i++) {
    //     for (let j = i + 1; j < n; j++) {
    //         const hashset = new Set();
    //         for (let k = j + 1; k < n; k++) {
    //             const sum = nums[i] + nums[j] + nums[k];
    //             const fourth = target - sum;

    //             if (hashset.has(fourth)) {
    //                 const temp = [nums[i], nums[j], nums[k], fourth];
    //                 temp.sort( (a, b) => a - b);
    //                 quadSet.add(temp.join());
    //             }

    //             hashset.add(nums[k]);
    //         }
    //     }
    // }

    // const ans = Array.from(quadSet).map(quad => quad.split(',').map(Number))
    // return ans;

    // OPTIMAL (Fastest and cleanest):
    // TIME COMPLEXITY: O(n²)
    // SPACE COMPLEXITY: O(1)
    const ans = [];
    const n = nums.length;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates
        
        for (let j = i + 1; j < n; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue; // Skip duplicates
            
            let k = j + 1;
            let l = n - 1;

            while(k < l) {
                const sum = nums[i] + nums[j] + nums[k] + nums[l];

                if (sum < target) {
                    k++;
                } else if (sum > target) {
                    l--;
                } else {
                    ans.push([nums[i], nums[j], nums[k], nums[l]]);

                    // Skip duplicates
                    k++;
                    l--;
                    while (k < l && nums[k] === nums[k + 1]) k++;
                    while (k < l && nums[l] === nums[l - 1]) l--;
                }
            }
        }
    }

    return ans;
}

const input1 = [1, -2, 3, 5, 7, 9];
const input2 = 7;
const result = fourSum(input1, input2);
console.log('All Quadruplets whose sum is', input2, 'in', input1, 'are', result);


// INTERVIEW FOLLOW UP QUESTIONS:
// ------------------------------

// What if the input array is unsorted?
    // Sorting is part of the solution and is necessary for efficient implementation. 
    // Sorting adds O ( nlogn ) complexity, which is manageable compared to O ( n^3 ).