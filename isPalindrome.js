var isPalindrome = (s) => {
    const parsedS = s.toLowerCase().replace(/[\W_]+/g, "");
    let left = 0,
        right = parsedS.length - 1;
    if (!parsedS) return true;
    while (left < right) {
        if (parsedS[left] !== parsedS[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));
// console.log(isPalindrome(" "));
console.log(isPalindrome("abb"));
