// const Y = (f) =>
//     ((x) => {
//         (y) => {
//             f(x(x))(y);
//         };
//     })((x) => {
//         (y) => {
//             f(x(x))(y);
//         };
//     });

// const exponent = (x, n) => {
//     if (n === 0) {
//         return 1;
//     } else if (n % 2 === 1) {
//         return x * exponent(x * x, Math.floor(n / 2));
//     } else {
//         return exponent(x * x, n / 2);
//     }
// };

// console.log(exponent(2, 7));

const memoized = (fn, keymaker = JSON.stringify) => {
    const lookupTable = Object.create(null);
    return function (...args) {
        const key = keymaker.call(this, args);
        return lookupTable[key] || (lookupTable[key] = fn.apply(this, args));
    };
};

// const mExponent = memoized(exponent);
// console.log(mExponent(2, 8));
// console.log(mExponent(2, 8));

// const mExponent = memoized((x, n) => {
//     if (n === 0) return 1;
//     else if (n % 2 === 1) return x * mExponent(x * x, Math.floor(n / 2));
//     else return mExponent(x * x, n / 2);
// });

// console.log(mExponent(2, 8));
// console.log(mExponent(2, 9));

(myself, x, n) => {
    if (n === 0) return 1;
    else if (n % 2 === 1) return x * myself(myself, x * x, Math.floor(n / 2));
    else return myself(myself, x * x, n / 2);
};

const mockingbird = (fn) => {
    (...args) => {
        fn(fn, ...args);
    };
};

// mockingbird((myself, x, n) => {
//     if (n === 0) return 1;
//     else if (n % 2 === 1) return x * myself(myself, x * x, Math.floor(n / 2));
//     else return myself(myself, x * x, n / 2);
// })(2, 8);

// console.log(
//     mockingbird((myself, x, n) => {
//         if (n === 0) return 1;
//         else if (n % 2 === 1)
//             return x * myself(myself, x * x, Math.floor(n / 2));
//         else return myself(myself, x * x, n / 2);
//     })(2, 8)
// );

const ignoreFirst = ([_, ...values]) => JSON.stringify(values);

const _exponent = (myself, x, n) => {
    if (n === 0) return 1;
    else if (n % 2 === 1) return x * myself(myself, x * x, Math.floor(n / 2));
    else return myself(myself, x * x, n / 2);
};

// console.log(mockingbird(memoized(_exponent, ignoreFirst))(2, 8));
const mExponent = mockingbird(memoized(_exponent, ignoreFirst));
const exponent = mockingbird(_exponent);

// console.log(mExponent(2, 8));
// console.log(mExponent(2, 9));
// console.log(exponent(2, 8));
// console.log(exponent(2, 9));

// const isEven = (n) => {
//     if (n === 0) return true;
//     else {
//         return !isEven(n - 1);
//     }
// };

// console.log(isEven(47));
// console.log(isEven(10000000)); // max calls

const isEven = (n, parity = 0) => {
    if (n === 0) parity === 0;
    else {
        return !isEven(n - 1, 1 - parity);
    }
};

// console.log(isEven(42));

/**
 * A trampoline is a loop that iteratively invokes thunk-returning
 * functions (continuation-passing style). A single trampoline is
 * sufficient to express all control transfer of a program; a program
 * so expresed is trampolined, or in trampolined style; converting a
 * program to trampolined style is trampolining. Trampolined functions
 * can be use to implement tail-recursive function calls in stack-oriented
 * programming languages.
 */

// class Thunk {
//     constructor(delayed) {
//         this.delayed = delayed;
//     }
//     evalute() {
//         return this.delayed();
//     }
// }

// const trampoline =
//     (fn) =>
//     (...initialArgs) => {
//         let value = fn(initialArgs);
//         while (value instanceof Thunk) {
//             value = value.evaluate();
//         }
//         return value;
//     };

// const fact = (f) => (n) => n < 2 ? 1 : n * f(n - 1);
// const fib = (f) => (n) => n < 3 ? 1 : f(n - 2) + f(n - 1);

// const factorial = Y(fact);
// const fibonacci = Y(fib);

// const factorial = (f, n) => (n < 2 ? 1 : n * f(f, n - 1));
// console.log(factorial(factorial, 6));

// const factorial = (f) => (n) => n < 2 ? 1 : n * f(f)(n - 1);
// console.log(factorial(factorial)(6));

// f(n) <=> n => (x => f(x))(n)

// const factorialOrig = (n) => (n < 2 ? 1 : n * factorialOrig(n - 1));
// console.log([1, 2, 3, 4, 5, 6].map(factorialOrig));

// console.log([1, 2, 3, 4, 5, 6].map(factorial));

// const fact = (f) => (n) => n < 2 ? 1 : n * f(n - 1);

// const factorial = ((f) => {
//     f(f); // Lemma 2
// })((f) => {
//     // (n) => (n < 2 ? 1 : n * f(f)(n - 1));
//     (n) => fact((x) => f(f)(x))(n);
// });

// const factorial = ((f) => f(f))((f) => (n) => fact((x) => f(f)(x))(n));

// const factorial = ((f) => f(f))((f) => fact((x) => f(f)(x)));

// g(g) <=> (f=>f(f))(g)

// const a = square;
// const b = (n) => square(n);

const Y = (le) => ((f) => f(f))((f) => le((x) => f(f)(x)));

const fact = (f) => (n) => n < 2 ? 1 : n * f(n - 1);
const fib = (f) => (n) => n < 3 ? 1 : f(n - 2) + f(n - 1);

const factorial = Y(fact);
const fibonnaci = Y(fib);

console.log([1, 2, 3, 4, 5, 6].map(factorial));
console.log([1, 2, 3, 4, 5, 6].map(fibonnaci));

// Lemma 1: A function can take a primitive and return a functioon
const power = (x) => (n) => x ** n;
// or
// function power(x) {
//     return function (n) {
//         return x ** n;
//     };
// }

const twoToThePower = power(2);
console.log(twoToThePower(3));

// Lemma 2: A function can take a function and return a function | Higher Order Function

const square = (x) => x ** 2;

const logResult = (f) => (x) => console.log(f(x));

const printSquare = logResult(square);

printSquare(10);
// function logResult(f) {
//     return function (x) {
//         console.log(f(x));
//     };
// }

// Lemma 3: f(n)==== (x => f(x))(n)
// Executing a function directly is eequivalent to creating
// a lambda expression that executes the function and executing the labmda
// expression instead.

console.log(square(4));
console.log(((x) => square(x))(4));

const Z = (f) =>
    (
        (x) => (y) =>
            f(x(x))(y)
    )((x) => (y) => f(x(x))(y));

const test = Z(fact);

console.log([1, 2, 3, 4, 5].map(factorial));
