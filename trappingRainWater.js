// extra mem.
// var trap = (height) => {
//     // maxLeft iterate l -> r
//     // maxRight iterate r -> l
//     // then take the minimum of the two
//     let out = 0;
//     const maxLeft = [], maxRight = [];
//     let maxL = 0, maxR = 0;
//     maxLeft.push(maxL)
//     maxRight.push(maxR)
//     for (let i = 1, j = height.length - 2; i < height.length; i++, j--) {
//         maxL = Math.max(maxL, height[i - 1])
//         maxLeft.push(maxL);
//         maxR = Math.max(maxR, height[j + 1])
//         maxRight.unshift(maxR);
//     }

//     for (let i = 0; i < height.length; i++) {
//         const trappedWater = Math.min(maxLeft[i], maxRight[i]) - height[i];
//         if(trappedWater < 0) continue;
//         out += trappedWater;
//     }

//     return out;
// }

/**
 * Property of NeetCode
 * Source: https://www.youtube.com/watch?v=ZI2z5pq0TqA
 */
// pointer method NeetCode - GGs... Def wouldn't get this one on my own...
// var trap = (height) => {
//     if (height.length === 0) {
//         return 0;
//     }
//     let out = 0,
//         l = 0,
//         r = height.length - 1;
//     let maxL = height[l],
//         maxR = height[r];
//     while (l < r) {
//         if (maxL < maxR) {
//             l++;
//             maxL = Math.max(maxL, height[l]);
//             // the reason for us not needing to check
//             out += maxL - height[l];
//         } else {
//             r--;
//             maxR = Math.max(maxR, height[r]);
//             out += maxR - height[r];
//         }
//     }
//     return out;
// };

// trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
