// const containsDuplicates = (nums) => {
//     while(nums.length){
//         let check = nums.shift();
//         for (let i = 0; i < nums.length; i++) {
//             if(check === nums[i]){
//                 return true;
//             }
//         }
//     }
//     return false;
// }
const containsDuplicates = (nums) => {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
    }
    return false;
};

let nums1 = [1, 2, 3, 1];
console.log(containsDuplicates(nums1));
// const nums2 = [1,2,3,4]
// console.log(containsDuplicates(nums2));
// let nums3 = [1,1,1,3,3,4,3,2,4,2]
// console.log(containsDuplicates(nums3));
