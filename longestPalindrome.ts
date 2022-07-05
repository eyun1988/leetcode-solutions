// const longestPalidrome = (s: string) => {
//     if (s.length < 1 || s === null || s === undefined) return "";
//     let longest = "";

//     for (let i = 0; i < s.length; i++) {
//         let oddPalindrome = expandFromCenter(s, i, i);
//         let evenPalindrome = expandFromCenter(s, i - 1, i);
//         if (oddPalindrome.length > longest.length) {
//             longest = oddPalindrome;
//         }
//         if (evenPalindrome.length > longest.length) {
//             longest = evenPalindrome;
//         }
//     }
//     return longest;
// };

// const expandFromCenter = (str, left, right) => {
//     let i = 0;
//     while (str[left - i] && str[left - i] === str[right + i]) {
//         i++;
//     }
//     i--;
//     return str.slice(left - i, right + i + 1);
// };

// const isPalidrome = (s: string) => {
//     for (let i = 0, j = s.length - 1; i < (s.length / 2) - 1; i++, j--) {
//         if(s[i] !== s[j]){
//             return false;
//         }
//     }
//     return true;
// }

console.log(longestPalidrome("babad"));
// console.log(longestPalidrome('cbbd'));
