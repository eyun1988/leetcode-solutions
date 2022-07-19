// const arr = [1,1,0,-1,-1];
const arr = [-4, 3, -9, 0, 4, 1];

const plusMinus = (arr) => {
    let totalPos = 0;
    let totalNeg = 0;
    let totalZero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            totalPos++;
            console.log(totalPos);
        } else if (arr[i] < 0) {
            totalNeg++;
            console.log(totalNeg);
        } else if (arr[i] == 0) {
            totalZero++;
        }
    }

    console.log(totalPos / arr.length);
    console.log(totalNeg / arr.length);
    console.log(totalZero / arr.length);
};
plusMinus(arr);
