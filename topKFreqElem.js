var topKFrequent = function (nums, k) {
    const count = {};
    const freq = [];
    for (let i = 0; i < nums.length + 1; i++) {
        freq[i] = [];
    }
    for (const [idx, el] of Object.entries(nums)) {
        if (count[el] === undefined) {
            count[el] = 1;
        } else {
            count[el]++;
        }
    }
    for (const [key, el] of Object.entries(count)) {
        freq[el].push(key);
    }
    out = [];
    for (let i = freq.length - 1; i >= 0; i--) {
        for (const n in freq[i]) {
            if (freq[i].length !== 0) {
                out.push(freq[i][n]);
            }
            if (out.length === k) {
                return out;
            }
        }
    }
    return out;
};

// const nums = [1,1,1,2,2,3], k = 2;
const nums = [1],
    k = 1;

console.log(topKFrequent(nums, k));
