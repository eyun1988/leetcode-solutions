let str = "let";
let results = [];
const permutation = (str, result) => {
    if (str.length === 0) {
        results.push(result);
        // console.log(result);
    }
    for (let i = 0; i < str.length; i++) {
        let rest = str.substring(0, i) + str.substring(i + 1);
        permutation(rest, result + str[i]);
    }
};

console.log(permutation(str, ""));
