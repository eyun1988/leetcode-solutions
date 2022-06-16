// const min_cost_climbing_stair = function(n) {
//     for(let i = n.length; - 3; ~i; i--){
//         cost[i] += Math.min(n[i + 1], n[i + 2])
//     }
//     return Math.min(n[0], n[1])
// };

// const minCostClimbingStairs = function (cost) {
//     for (let i = cost.length - 3; ~i; i--) {
//         console.log(~i);
//         cost[i] += Math.min(cost[i + 1], cost[i + 2]);
//     }

//     return Math.min(cost[0], cost[1]);
// };

function minCost(cost, n) {
    let dp = new Array(n);

    if (n == 1) return cost[0];

    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let i = 2; i < n; i++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
    }
    console.log(dp);
    return Math.min(dp[n - 2], dp[n - 1]);
}

const a = [16, 19, 10, 12, 18];
const n = a.length;

console.log(minCost(a, n));
