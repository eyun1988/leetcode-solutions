// amazon question
const avg_diff_two_subarray = (arr) => {
    let diff = [];
    for (let i = 1; i < arr.length; i++) {
        const arr1 = arr.slice(0, i);
        console.log(arr1);
        const arr2 = arr.slice(i);
        console.log(arr2);
        const avg1 = Math.floor(arr1.reduce((a, b) => a + b, 0) / arr1.length);
        const avg2 = Math.floor(arr2.reduce((a, b) => a + b, 0) / arr2.length);
        diff.push(avg1 - avg2);
    }
    console.log(diff);

    // FIXME: return index of the max min diff
    return Math.min(...diff);
};
// const arr = [100,1,2,3,4,5,220,240];
// console.log(avg_diff_two_subarray(arr)); // index 5

const arr2 = [100, 120, 240];
console.log(avg_diff_two_subarray(arr2)); // index 2
