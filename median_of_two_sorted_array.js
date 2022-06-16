let nums1 = [1, 3];
let nums2 = [2];

const medianOfTwoSortedArray = (nums1, nums2) => {
  let mergedArray = [...nums1, ...nums2];
  let len = mergedArray.length;
  let mid = Math.floor(mergedArray.length / 2);
  mergedArray.sort();

  if (len % 2 === 0) {
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2.0;
  }
  return mergedArray[mid] / 1.0;
};

console.log(medianOfTwoSortedArray(nums1, nums2));
console.log(medianOfTwoSortedArray([1, 2], [3, 4]));
console.log(medianOfTwoSortedArray([1, 2, 3, 4], [5, 6]));
