// naive
// var tribonacci = function (n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     if (n === 2) return 1;
//     return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
// };

// var memo = { 0: 0, 1: 1, 2: 1 };
// var tribonacci = function (n) {
//     if (typeof memo[n] != "undefined") return memo[n];
//     return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
// };

// var tribonacci = function (n) {
//     const dp = [];
//     function helper(num) {
//         if (dp[num] != undefined) return dp[num];
//         if (num == 0) return 0;
//         if (num <= 2) return 1;
//         const triVal = helper(num - 1) + helper(num - 2) + helper(num - 3);
//         dp[num] = triVal;
//         return triVal;
//     }
//     return helper(n);
// };

var tribonacci = function (n) {
    let arr = new Array(n + 1).fill(0);
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 1;

    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1];
    }
    return arr[n];
};

console.log(tribonacci(34));
