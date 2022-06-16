const palindrome = (str: string): boolean => {
  if (str.toLowerCase() === str.split("").reverse().join("").toLowerCase())
    return true;
  return false;
};

const palindromeT = (str: string): boolean => {
  let len: number = str.length;
  let mid: number = Math.floor(len / 2);
  for (let i = 0, j = len - 1; i < mid || j > mid; i++, j--) {
    if (str[i] !== str[j]) return false;
  }
  return true;
};

console.log(`bob ${palindrome("bob") ? "is" : "is not"} a palindrome`);
console.log(`racecar ${palindrome("racecar") ? "is" : "is not"} a palindrome`);
console.log(`hello ${palindrome("hello") ? "is" : "is not"} a palindrome`);
console.log(`howdy ${palindrome("howdy") ? "is" : "is not"} a palindrome`);

console.log(`bob ${palindromeT("bob") ? "is" : "is not"} a palindrome`);
console.log(`racecar ${palindromeT("racecar") ? "is" : "is not"} a palindrome`);
console.log(`hello ${palindromeT("hello") ? "is" : "is not"} a palindrome`);
console.log(`howdy ${palindromeT("howdy") ? "is" : "is not"} a palindrome`);
