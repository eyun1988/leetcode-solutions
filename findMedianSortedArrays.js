// var findMedianSortedArrays = function (nums1, nums2) {
//     let mergedArray = [...nums1, ...nums2];
//     let mid = Math.floor(mergedArray.length / 2);
//     let len = mergedArray.length;

//     mergedArray.sort((a, b) => {
//         return a - b;
//     });
//     console.log(mergedArray);

//     if (len % 2 === 0) {
//         return (mergedArray[mid - 1] + mergedArray[mid]) / 2.0;
//     }
//     return mergedArray[mid];
// };
var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    let x = nums1.length;
    let y = nums2.length;

    let low = 0;
    let high = x;
    while (low <= high) {
        let partitionX = Math.floor(low + high) / 2;
        let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

        let maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        let minRightX = partitionX === x ? Infinity : nums1[partitionX];

        let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        let minRightY = partitionY === y ? Infinity : nums2[partitionY];

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if ((x + y) % 2 === 0) {
                return (
                    (Math.max(maxLeftX, maxLeftY) +
                        Math.min(minRightX, minRightY)) /
                    2
                );
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            // move toward left in nums1
            high = partitionX - 1;
        } else {
            // move toward right in nums1
            low = partitionX + 1;
        }
    }
};

// console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 3, 8, 9, 15], [7, 11, 18, 19, 21, 25]));
console.log(findMedianSortedArrays([23, 26, 31, 35], [3, 5, 7, 9, 11, 16]));
// console.log(findMedianSortedArrays([3], [-2, -1]));
