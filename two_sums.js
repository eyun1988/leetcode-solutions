const twoSums = (nums, target) => {
    const obj = {};

    for (const [idx, num] of Object.entries(nums)) {
        const complement = target - num;
        if (complement in obj) {
            return [obj[complement], idx];
        }
        obj[num] = idx;
    }
};

let nums = [3, 2, 4],
    target = 6;

console.log(twoSums(nums, target));
