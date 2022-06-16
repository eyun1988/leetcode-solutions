// let two_sum = (array, sum) => {
//   let hash = {};
//   let nums = [];

//   for (let i in array) {
//     let comp = sum - array[i];
//     if (comp in hash) {
//       nums.push([comp, array[i]]);
//     }
//     hash[array[i]] = i;
//   }
//   return nums;
// };

const two_sum = (arr: number[], target: number): number[][] => {
  // <value, complement>
  //   let map1 = new Map<number, number>();
  let hash: { [key: number]: string } = {};
  let nums: number[][] = [];
  for (let i in arr) {
    let comp = target - arr[i];
    if (comp in hash) {
      nums.push([comp, arr[i]]);
    }

    hash[arr[i]] = i;
  }
  return nums;
};

console.log(two_sum([1, 4, 10, 3, 11], 12));
console.log(two_sum([2, 3, 4, 3, 6, 7, 3], 6));
