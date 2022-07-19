const a = [1, 2, 3];
const b = [3, 2, 1];

const compareTriplets = (a, b) => {
    let scores = [0, 0];
    for (let i = 0; i < a.length; i++) {
        console.log(a[i] > b[i]);
        if (a[i] > b[i]) {
            scores[0] = scores[0] + 1;
        } else if (a[i] < b[i]) {
            scores[1] = scores[1] + 1;
        }
    }
    return scores;
};

console.log(compareTriplets(a, b));
