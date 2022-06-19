// console.log((10 >>> 0).toString(2));
const check_bit = (num, n) => {
    return (num & (1 << (n - 1))) > 0;
};

function has_bit_parity(a_number) {
    if (isNaN(a_number)) return -1;
    const binary = (a_number >>> 0).toString(2);
    const splitSum = binary.split("").map((el) => {
        return parseInt(el);
    });
    // console.log(splitSum);
    // const reducer  = splitSum.reduce((a, b) => a + b, 0);
    return splitSum.reduce((a, b) => a + b, 0);
}

console.log(has_bit_parity(4));
console.log(has_bit_parity(5));
// console.log(has_bit_parity(10));
// console.log(has_bit_parity(8));
