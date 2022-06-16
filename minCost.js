function minCost(cost) {
    let n = a.length;

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

console.log(minCost(a));

const myArray = [[[[[["Nested Value"]]]]]];

const unwrap = (array) => (Array.isArray(array) ? unwrap(array[0]) : array);

console.log(unwrap(myArray));
