// naive
// var twoSums = (numbers, target) => {
//     let obj = {}; // numbers : index
//     for(let [idx, num] of Object.entries(numbers)){
//         const complement = target - num;
//         // console.log(complement);
//         if(obj[complement]){
//             return [parseInt(obj[complement])+1, parseInt(idx)+1]
//         }
//         obj[num] = idx;
//     }
// }

// pointer
var twoSums = (numbers, target) => {
    let left = 0,
        right = numbers.length - 1;

    while (left < right) {
        curSum = numbers[left] + numbers[right];
        if (curSum > target) {
            right--;
        } else if (curSum < target) {
            left++;
        } else {
            return [left + 1, right + 1];
        }
    }
    return [];
};

console.log(twoSums([2, 7, 11, 15], 9));
