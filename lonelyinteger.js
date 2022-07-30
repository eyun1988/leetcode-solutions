function lonelyinteger(a) {
    // Write your code here
    let map = new Map();
    let out = 0;
    for (let i = 0; i < a.length; i++) {
        if (!map.has(a[i])) {
            map.set(a[i], 1);
        } else {
            map.set(a[i], map.get(a[i]) + 1);
        }
    }
    for (let elem of map.entries()) {
        if (elem[1] === 1) out = elem[0];
    }
    return out;
}

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));
