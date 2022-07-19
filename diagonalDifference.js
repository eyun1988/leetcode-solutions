const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const diagonalDiff = (arr) => {
    let lToRDiagonalSum = 0;
    let rToLDiagonalSum = 0;
    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (i === j) {
                lToRDiagonalSum += arr[i][j];
            }
            if (arr[0].length - i - 1 === j) {
                rToLDiagonalSum += arr[i][j];
            }
        }
    }
    return Math.abs(lToRDiagonalSum - rToLDiagonalSum);
};

diagonalDiff(arr);
console.log(diagonalDiff(arr));
