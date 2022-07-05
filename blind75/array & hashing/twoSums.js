// const nums = [2, 7, 11, 15],
//     target = 9;

const twoSums = (nums, target) => {
    const obj /* compliment, index */ = {};
    const results = [];
    for (const [idx, n] of Object.entries(nums)) {
        const complement = target - n;
        if (complement in obj) {
            results.push([obj[complement], +idx]);
        }
        obj[n] = +idx;
    }
    return results[0];
};
const nums = [2, 7, 11, 15],
    target = 9;

console.log(twoSums(nums, target));
