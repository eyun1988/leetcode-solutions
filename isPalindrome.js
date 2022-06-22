// naive approach
// var isPalindrome = (s) => {
//     const parsedS = s.toLowerCase().replace(/[\W_]+/g, "");
//     let left = 0,
//         right = parsedS.length - 1;
//     if (!parsedS) return true;
//     while (left < right) {
//         if (parsedS[left] !== parsedS[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// };

// less space, same time
var isPalindrome = (s) => {
    let left = 0,
        right = s.length - 1;
    while (left < right) {
        while (left < right && !alphaNum(s[left])) left++;
        while (left < right && !alphaNum(s[right])) right--;
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
        left++;
        right--;
    }
    return true;
};

const alphaNum = (char) => {
    const code = char.charCodeAt(0);
    return (
        (code > 47 && code < 58) ||
        (code > 64 && code < 91) ||
        (code > 96 && code < 123)
    );
    // return char.charCodeAt(0);
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));
// console.log(isPalindrome(" "));
// console.log(isPalindrome("abb"));
