// // my shitty approach
// var checkInclusive = function (s1, s2) {
//     // loop through each character
//     // get the substring of current
//     // check if it's an anagram
//     const anagramLen = s1.length;
//     for (let i = 0; i <= s2.length - anagramLen; i++) {
//         const subString = s2.substring(i, i + s1.length);
//         if (isAnagram(s1, subString)) return true;
//     }
//     return false;
// };

// const isAnagram = function (s, t) {
//     if (s.length !== t.length) {
//         return false;
//     }
//     // const countS = {};
//     // const countT = {};
//     const countS = new Map();
//     const countT = new Map();
//     // optimized to one loop since we know s and t are the same length. we can count for both at the same time.
//     for (let i = 0; i < s.length; i++) {
//         countS[s[i]] = s[i] in countS ? countS[s[i]] + 1 : 1;
//         countT[t[i]] = t[i] in countT ? countT[t[i]] + 1 : 1;
//     }
//     // strict equality
//     for (const count in countS) {
//         if (countS[count] !== countT[count]) return false;
//     }
//     return true;
// };

// neetcode solution
var checkInclusive = (s1, s2) => {
    if (s1.length > s2.length) return false;

    let s1Count = Array(26).fill(0);
    let s2Count = Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    for (let i = 0; i < s2.length; i++) {
        s2Count[s2[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    // console.log(s1Count);
    // console.log(s2Count);
    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (s1Count[i] == s2Count[i]) {
            matches += 1;
        } else {
            matches += 0;
        }
    }
    let l = 0;
    for (let r = s1.length; r < s2.length; r++) {
        if (matches === 26) return true;
        let index = s2[r].charCodeAt(0) - "a".charCodeAt(0);
        s2Count[index] += 1;
        if (s1Count[index] == s2Count[index]) matches += 1;
        else if (s1Count[index] + 1 == s2Count[index]) matches -= 1;

        index = s2[l].charCodeAt(0) - "a".charCodeAt(0);
        s2Count[index] -= 1;
        if (s1Count[index] == s2Count[index]) matches += 1;
        else if (s1Count[index] - 1 == s2Count[index]) matches -= 1;

        l += 1;
    }
    // console.log(matches);
    return matches === 26;
};

// console.log(checkInclusive("ab", "eidbaooo"));
console.log(checkInclusive("ab", "eidboaoo"));
// console.log(checkInclusive("adc", "dcda"));
// console.log(checkInclusive("hello", "ooolleoooleh"));
