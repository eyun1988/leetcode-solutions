// const isAnagram = function(s, t) {
//     const sSort = s.split("").sort().join("");
//     const tSort = t.split("").sort().join("");
//     return sSort === tSort;
// };
// const isAnagram = function(s, t) {
//     if(s.length !== t.length){
//         return false;
//     }
//     const countS = new Map();
//     const countT = new Map();
//     for (let i = 0; i < s.length; i++) {
//         if(s[i] in countS){

//             console.log();
//         }
//         // console.log(countS.get(s[i], 0));
//         // countS[s[i]] = countS.get(s[i], 0) + 1;
//         // console.log(countS[s[i]]);
//     }
// };

const isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const countS = {};
    const countT = {};
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in countS)) {
            countS[s[i]] = 1;
        } else {
            countS[s[i]] = 1 + countS[s[i]];
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (!(t[i] in countT)) {
            countT[t[i]] = 1;
        } else {
            countT[t[i]] = 1 + countT[t[i]];
        }
    }
    for (const count in countS) {
        if (countS[count] !== countT[count]) return false;
    }
    return true;
};

// const s = "anagram", t = "nagaram";
// console.log(isAnagram(s,t));
// const s1 = 'rat', t1 = 'car'
// console.log(isAnagram(s1,t1));
