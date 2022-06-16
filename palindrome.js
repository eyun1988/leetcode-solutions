// naive
let palindrome = (str) => {
    return str === str.split("").reverse().join("");
};

console.log(palindrome("tacocat"));
console.log(palindrome("racecar"));
console.log(palindrome("fuck"));
console.log(palindrome("fuckthis"));
