var myAtoi = function (s) {
    let isNegative = false;
    if (s[0] === " ") {
        const trimmed = s.trim();
    }
    // need range limiters to trim -2^31 to 2^32 - 1
    if (s[0] === "-") {
        isNegative = true;
        s = s.substring(1); // remove negative
    }
    Math.floor(s);

    if (isNegative) {
        s = s * -1;
    }

    return s;
};

console.log(myAtoi("-42"));
console.log(myAtoi("      -42"));
console.log(myAtoi("4193 with words"));
