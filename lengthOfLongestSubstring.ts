/**
 * Insert first char manually into the set
 * Iterate over string
 *    Check to see if char exist within set
 *
 * concept:
 * left and right will create a "sliding" window.
 * right will be are traversing pointer that will create our window
 * and increment max.
 * we, then, will compare if str[right] is in the set if so
 *
 */

/**
 * "abcabcbb"
 *      left right
 * set = [ a, b, c  ]
 * a exists
 * increment left
 * remove a from set
 *
 */

const lengthOfLongSubstring = (s: string): number => {
    let left = 0;
    let right = 0;
    let max = 0;
    const set = new Set();

    while (right < s.length) {
        if (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        } else {
            set.add(s[right]);
            right++;
            max = Math.max(max, set.size);
        }
    }
    return max;
};
// console.log(lengthOfLongSubstring("abcabcbb"));
// console.log(lengthOfLongSubstring("bbbbb"));
console.log(lengthOfLongSubstring("pwwkew"));
// console.log(lengthOfLongSubstring("aab"));
