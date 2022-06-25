// var maxArea = function (height) {
//     if (height.length == 2) {
//         return Math.min(height[0], height[1]) * (height.length - 1);
//     }
//     let l = 0,
//         r = height.length - 1,
//         width = height.length - 1,
//         area = Math.min(height[l], height[r]) * width;
//     width--;
//     while (l < r) {
//         if (height[l] < height[r]) {
//             l++;
//             area = Math.max(area, Math.min(height[l], height[r]) * width--);
//         } else {
//             r--;
//             area = Math.max(area, Math.min(height[l], height[r]) * width--);
//         }
//     }
//     return area;
// };

var maxArea = function (height) {
    if (height.length == 2) {
        return Math.min(height[0], height[1]) * (height.length - 1);
    }
    let l = 0,
        r = height.length - 1,
        width = height.length - 1,
        area = Math.min(height[l], height[r]) * width;
    width--;
    while (l < r) {
        if (height[l] < height[r]) {
            l++;
            area = Math.max(area, Math.min(height[l], height[r]) * width--);
        } else {
            r--;
            area = Math.max(area, Math.min(height[l], height[r]) * width--);
        }
    }
    return area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([2, 3, 10, 5, 7, 8, 9]));
