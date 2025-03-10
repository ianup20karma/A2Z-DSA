class Solution {
    merge(arr, low, mid, high) {
        let temp = [];
        let left = low;
        let right = mid + 1;

        while (left <= mid && right <= high) {
            if (arr[left] <= arr[right]) {
                temp.push(arr[left]);
                left++;
            } else {
                temp.push(arr[right]);
                right++;
            }
        }

        while (left <= mid) {
            temp.push(arr[left]);
            left++;
        }

        while (right <= high) {
            temp.push(arr[right]);
            right++;
        }

        for (let i = low; i <= high; i++) {
            arr[i] = temp[i - low];
        }
    }

    mergeSortHelper(arr, low, high) {
        if (low >= high) return;

        let mid = Math.floor((low + high) / 2);
        this.mergeSortHelper(arr, low, mid);
        this.mergeSortHelper(arr, mid + 1, high);
        this.merge(arr, low, mid, high);
    }

    mergeSort(nums) {
        let n = nums.length;
        this.mergeSortHelper(nums, 0, n - 1);
        return nums;
    }
}

const main = () => {
    let arr = [9, 4, 7, 6, 3, 1, 5];
    let n = arr.length;

    console.log("Before Sorting Array: ");
    for (let i = 0; i < n; i++)
        process.stdout.write(arr[i] + " ");
    console.log();

    let sol = new Solution();
    let sortedArr = sol.mergeSort(arr);

    console.log("After Sorting Array: ");
    for (let i = 0; i < n; i++)
        process.stdout.write(sortedArr[i] + " ");
    console.log();
}

main();