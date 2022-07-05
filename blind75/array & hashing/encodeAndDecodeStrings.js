const encode = (strs) => {
    let out = "";
    const delimiter = ":;";
    for (let i = 0; i < strs.length; i++) {
        if (i === strs.length - 1) {
            out += strs[i];
            break;
        }
        out += strs[i] + delimiter;
    }
    return out;
};

const decode = (str) => {
    let out = str.split(":;");
    return out;
};

const strs = ["lint", "code", "love", "you"];

console.log(encode(strs));
console.log(decode(encode(strs)));
