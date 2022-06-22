var longestConsecutive = (nums) => {
    // console.log(nums.sort((a,b) => a - b));
    // const sortedNums = nums.sort((a,b) => a - b);
    // let count = 0;
    // let arr = [];
    // for (let i = 0; i < sortedNums.length; i++) {
    //     for (let j = 0; j < sortedNums.length; j++) {

    //     }
    // }
    // for (let i = 0; i < sortedNums.length; i++) {
    //     if(sortedNums[i] != sortedNums[i-1] + 1){
    //         return false;
    //     }
    // }
    // return arr.length;
    /**
     * 1, 2, 3, 4,... ,100,... ,200
     * look at the array and notice that there is no left neighbor
     * 1, 100, 200 all do NOT have a left neighbor 0, 99, 199.
     * 1, 100, 200 will be the start and now we can check for their right neighbor 2, 101, 201 and see if we can continue checking for the next number of the sequence.
     */
    const set = new Set(nums);
    let longest = 0;
    for (const num of nums) {
        // check if it's a start of a sequence by
        if (!set.has(num - 1)) {
            let length = 0;
            while (set.has(num + length)) {
                length++;
                longest = Math.max(length, longest);
            }
        }
    }
    return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
