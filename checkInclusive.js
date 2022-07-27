var checkInclusive = function (s1, s2) {
    // loop through each character
    // get the substring of current
    // check if it's an anagram
    const anagramLen = s1.length;
    for (let i = 0; i <= s2.length - anagramLen; i++) {
        const subString = s2.substring(i, i + s1.length);
        if (isAnagram(s1, subString)) return true;
    }
    return false;
};

const isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    // const countS = {};
    // const countT = {};
    const countS = new Map();
    const countT = new Map();
    // optimized to one loop since we know s and t are the same length. we can count for both at the same time.
    for (let i = 0; i < s.length; i++) {
        countS[s[i]] = s[i] in countS ? countS[s[i]] + 1 : 1;
        countT[t[i]] = t[i] in countT ? countT[t[i]] + 1 : 1;
    }
    // strict equality
    for (const count in countS) {
        if (countS[count] !== countT[count]) return false;
    }
    return true;
};

// console.log(checkInclusive('ab', 'eidbaooo'));
// console.log(checkInclusive('ab', 'eidboaoo'));
// console.log(checkInclusive('adc', 'dcda'));
console.log(checkInclusive("hello", "ooolleoooleh"));
