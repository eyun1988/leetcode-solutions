/**
 * You are given a string s and an integer k. You can choose any character of
 * the string and change it to any other uppercase English character. You can
 * perform this operation at most k times.
 *
 * Return the length of the longest substring containing the same letter you
 * can get after performing the above operations.
 *
 * Input: s = "ABAB", k = 2
 * Output: 4
 * Explanation: Replace the two 'A's with two 'B's or vice versa.
 */

var characterReplacement = function (s, k) {
    // find most frequent character in string
    let count = new Map();
    let res = 0,
        l = 0;
    let maxFreq = 0;

    for (let r = 0; r < s.length; r++) {
        if (count.has(s[r])) {
            count.set(s[r], count.get(s[r]) + 1);
        } else {
            count.set(s[r], 1);
        }

        maxFreq = Math.max(
            // find max of current count of all elements
            Array.from(count.values()).reduce((a, b) => {
                return Math.max(a, b);
            }),
            maxFreq
        );
        console.log("maxFreq " + maxFreq);
        while (r - l + 1 - maxFreq > k) {
            count.set(s[l], count.get(s[l]) - 1);
            l++;
        }
        res = Math.max(res, r - l + 1);
    }
    return res;
};

console.log(characterReplacement("ABAB", 2));
