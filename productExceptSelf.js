var productExceptSelf = (nums) => {
    // const arr = [];
    // for (const ignoreNum of nums) {
    //     for (const num of nums) {
    //         let product = 1;
    //         if(ignoreNum !== num){
    //             product *= num;
    //         }
    //     }
    //     arr.push(product)
    // }
    // return arr;
    out = [];
    for (const x of nums) {
        out.push(1);
    }
    prefix = 1;
    for (const [idx, el] of Object.entries(nums)) {
        out[idx] = prefix;
        prefix *= el;
    }
    postfix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        out[i] *= postfix;
        postfix *= nums[i];
    }
    return out;
};

console.log(productExceptSelf([1, 2, 3, 4]));
// console.log(productExceptSelf([-1,1,0,-3,3]));
// console.log(productExceptSelf([0,0]));
