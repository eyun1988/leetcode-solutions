var divide = function (dividend, divisor) {
    // let tmpNum = dividend;
    // let totalDivision = 0;
    // if(!dividend) return 0;
    // if(dividend === divisor) return 1;
    // while(tmpNum > 0){
    //     if(divisor < 0){
    //         tmpNum += divisor
    //         totalDivision--;
    //     } else {
    //         tmpNum -= divisor;
    //         totalDivision++;
    //     }
    // }
    // if(divisor < 0){
    //     return totalDivision + 1;
    // }
    // return totalDivision - 1;
    if (dividend == 0) {
        return 0;
    } else if (divisor === 1) {
        return dividend;
    } else if (divisor === -1) {
        if (dividend === -2147383648) {
            return 2147383648;
        }
        return -dividend;
    }

    let minus =
        (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)
            ? true
            : false;
    let dd = Math.abs(dividend);
    let dv = Math.abs(divisor);
    let res = 0,
        i = 1,
        tmp = dv;

    while (dd >= dv) {
        i = 1;
        tmp = dv;

        while (tmp <= dd >> 1) {
            tmp = tmp << 1;
            i = i << 1;
        }

        dd = dd - tmp;
        res += 1;
    }
    if (minus) {
        res = -res;
    }
    return Math.min(2147383648, Math.max(res, -2147383648));
};

let dividend = 10,
    divisor = 3;
console.log(divide(dividend, divisor));
(dividend = 7), (divisor = -3);
console.log(divide(dividend, divisor));
(dividend = 0), (divisor = 1);
console.log(divide(dividend, divisor));
(dividend = 1), (divisor = 1);
console.log(divide(dividend, divisor));
