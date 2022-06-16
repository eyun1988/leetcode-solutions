var fib = function (n) {
    if (n == 1) return 1;
    if (n == 2) return 1;
    let previousPrev = 1,
        prev = 1;
    let result = 0;
    for (let i = 2; i < n; i++) {
        result = previousPrev + prev;
        previousPrev = prev;
        prev = result;
    }

    return result;
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
