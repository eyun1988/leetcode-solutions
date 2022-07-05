const groupAnagrams = (strs) => {
    if (strs.length === 1) {
        return [strs];
    }
    const sortedStrs = strs.map((str) => str.split("").sort().join(""));
    const hash = {};
    for (let i = 0; i < strs.length; i++) {
        if (!hash[sortedStrs[i]]) {
            hash[sortedStrs[i]] = [strs[i]];
        } else {
            hash[sortedStrs[i]].push(strs[i]);
        }
    }

    return Object.values(hash);
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
