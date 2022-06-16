// let regexpFileExt: RegExp = /.*\.ts$/;

// const files = ["hw1.ts", "hw1.js", "hw2.ts", "hw2.js"];

// console.log(files.filter((x) => regexpFileExt.test(x)));

// const phoneNumbers = [
//     "123-456-7890",
//     "(123) 456-7890",
//     "1234567890",
//     "+1 1234567890",
// ];

// let regexpPhone: RegExp = /^[0-9]{3}[0-9]{3}[0-9]{4}$/;
// console.log(phoneNumbers.filter((x) => regexpPhone.test(x)));

// let regexpPhone2: RegExp = /^[0-9]{3}\s*-?\s*[0-9]{3}\s*-?\s*[0-9]{4}$/;
// console.log(phoneNumbers.filter((x) => regexpPhone2.test(x)));

// let regexpPhone3: RegExp = /^(\d{3})|(\(\d{3}\))\s*-?\s*\d{3}\s*-?\s*\d{4}$/;
// console.log(phoneNumbers.filter((x) => regexpPhone3.test(x)));

// let regexpPhone4: RegExp =
//     /^(\+\d+)?\s*(\d{3})|(\(\d{3}\))\s*-?\s*\d{3}\s*-?\s*\d{4}$/;
// console.log(phoneNumbers.filter((x) => regexpPhone4.test(x)));

// let regexpEmail: RegExp = /^[\w.-]+@[\w.-]+$/;
// console.log(regexpEmail.test("bob@sfsu.edu"));
// console.log(regexpEmail.test("bobsfsu.edu"));
// console.log(regexpEmail.test("bob@sfsu"));

type RegExpr =
    | { tag: "VOID" }
    | { tag: "EMPTY" }
    | { tag: "CHAR"; char: string }
    | { tag: "STAR"; re: RegExpr }
    | { tag: "CONCAT"; re1: RegExpr; re2: RegExpr }
    | { tag: "OR"; re1: RegExpr; re2: RegExpr };

function newVoid(): RegExpr {
    return { tag: "VOID" };
}
function newEmpty(): RegExpr {
    return { tag: "EMPTY" };
}
function newChar(char: string): RegExpr {
    return { tag: "CHAR", char: char };
}
function newStar(re: RegExpr): RegExpr {
    return { tag: "STAR", re: re };
}
function newConcat(re1: RegExpr, re2: RegExpr): RegExpr {
    return { tag: "CONCAT", re1: re1, re2: re2 };
}
function newOr(re1: RegExpr, re2: RegExpr): RegExpr {
    return { tag: "OR", re1: re1, re2: re2 };
}

function regexpTest(arr: string[], re: RegExpr): boolean {
    switch (re.tag) {
        case "VOID": {
            return false;
        }
        case "EMPTY": {
            return arr.length === 0;
        }
        case "CHAR": {
            return arr.length === 1 ? arr[0] === re.char : false;
        }
        case "STAR": {
            if (arr.length === 0) {
                return true;
            }
            for (let i = 1; i <= arr.length; i++) {
                let arr2 = arr.slice(0, i);
                let count = 1;
                while (regexpTest(arr2, re.re) && arr2.length === i) {
                    arr2 = arr.slice(count * i, (count + 1) * i);
                    count += 1;
                }
                if (arr2.length === 0) {
                    return true;
                }
            }
            return false;
        }
        case "CONCAT": {
            for (let i = 0; i <= arr.length; i++) {
                if (
                    regexpTest(arr.slice(0, i), re.re1) &&
                    regexpTest(arr.slice(i), re.re2)
                ) {
                    return true;
                }
            }
            return false;
        }
        case "OR": {
            return regexpTest(arr, re.re1) || regexpTest(arr, re.re2);
        }
    }
}

const re1 = newConcat(newChar("a"), newConcat(newChar("b"), newChar("c")));
console.log(JSON.stringify(re1, undefined, 3));
console.log(regexpTest(["a", "b", "c"], re1));
console.log(regexpTest(["a", "b"], re1));
console.log(regexpTest(["a", "a", "b", "c"], re1));

const re2_ = newConcat(newChar("a"), newChar("b"));
const re2 = newOr(re1, re2_);
console.log(JSON.stringify(re2, undefined, 3));
console.log(regexpTest(["a", "b", "c"], re2));
console.log(regexpTest(["a", "b"], re2));
console.log(regexpTest(["a", "a", "b", "c"], re2));

const re3 = newStar(re1);
console.log(JSON.stringify(re3, undefined, 3));
console.log(regexpTest([], re3));
console.log(regexpTest(["a", "b", "c"], re3));
console.log(regexpTest(["a", "b", "c", "a", "b", "c"], re3));
console.log(regexpTest(["a", "b", "c", "a", "b", "c", "a", "b", "c"], re3));
console.log(
    regexpTest(["a", "b", "c", "a", "b", "c", "a", "b", "c", "a"], re3)
);
