// Naive
// var maxProfit = function (prices) {
//     let max = 0;
//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i; j < prices.length; j++) {
//             if (i == j) continue;
//             max = Math.max(max, prices[j] - prices[i]);
//         }
//     }
//     return max;
// };
// sliding window
var maxProfit = (prices) => {
    let l = 0,
        r = 1,
        max = 0;
    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            max = Math.max(max, prices[r] - prices[l]);
        } else {
            l = r;
        }
        r++;
    }
    return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7,6,4,3,1]));
