const arr = [1, 3, 5, 7, 9];

function miniMaxSum(arr) {
    const len = arr.length;
    let min = Infinity,
        max = 0;
    for (let i = 0; i < len; i++) {
        let sum = 0;
        for (let j = 0; j < len; j++) {
            if (i == j) {
                continue;
            }
            sum += arr[j];
        }
        min = Math.min(min, sum);
        max = Math.max(max, sum);
    }
    console.log(min + " " + max);
}

console.log(miniMaxSum(arr));
