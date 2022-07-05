var lengthOfLongestSubstring = function (s) {
    let left = 0,
        right = 0,
        max = 0;
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
console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring('bbbbb'));
// console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring("aab"));
