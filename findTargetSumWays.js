const findTargetSumWays = (nums, target) => {
    let dp = {};

    function backtrack(i, total) {
        if (i == nums.length) {
            return total === target ? 1 : 0;
        }
        if ([i, total] in dp) {
            return dp[[i, total]];
        }
        dp[[i, total]] =
            backtrack(i + 1, total + nums[i]) +
            backtrack(i + 1, total - nums[i]);
        console.log(dp);
        return dp[[i, total]];
    }

    return backtrack(0, 0);
};
// const findTargetSumWays = (nums, target) => {
//     let ans = 0;
//     calculate(nums, 0, 0, target);
//     return ans;
//     function calculate(nums, i, currentSum, target) {
//         if (i == nums.length) {
//             if (currentSum == target) {
//                 ans++;
//             }
//         } else {
//             calculate(nums, i + 1, currentSum + nums[i], target);
//             calculate(nums, i + 1, currentSum - nums[i], target);
//         }
//     }
// };

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
