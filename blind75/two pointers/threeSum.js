/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 * Example 1:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 *
 * Example 2:
 * Input: nums = []
 * Output: []
 *
 * Example 3:
 * Input: nums = [0]
 * Output: []
 *
 * Basically find three unique elements in an array that sum to zero.
 */

// we can sort the original array of numbers
// then iterate through every element
var threeSum = (nums) => {
    if (!nums.length || nums.length == 1) return [];
    // outer incremental loop
    const out = [];
    nums = nums.sort((a, b) => a - b, 0); // nlog(n)
    // console.log(nums);
    for (const [i, num] of Object.entries(nums)) {
        if (i > 0 && nums[i - 1] === num) continue;
        // console.log(i);
        // console.log(nums[i - 1]);
        // console.log(num);
        let l = parseInt(i) + 1,
            r = nums.length - 1;
        while (l < r) {
            let threeSum = num + nums[l] + nums[r];
            if (threeSum > 0) {
                r--;
            } else if (threeSum < 0) {
                l++;
            } else {
                out.push([num, nums[l], nums[r]]);
                l++;
                while (nums[l - 1] === nums[l] && l < r) {
                    l++;
                }
            }
        }
    }
    return out;
};
// console.log(threeSum([]));
// console.log(threeSum([0]));
// console.log(threeSum([1,2,3,4,5]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// [[-1,-1,2],[-1,0,1]
