const arr = [3, 2, 1, 3];

const birthdayCakeCandles = (candles) => {
    // first pass find max value
    let max = -Infinity;
    let count = 0;
    for (let i = 0; i < candles.length; i++) {
        max = Math.max(max, candles[i]);
    }
    // second pass counts how many returns total amt
    for (let i = 0; i < candles.length; i++) {
        if (max === candles[i]) {
            count++;
        }
    }

    return count;
};

console.log(birthdayCakeCandles(arr));
