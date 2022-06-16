const x = [1, 2, 3];

let y = [...x];

y.forEach((_, idx) => {
  y[idx] = 4;
});

console.log(x);
console.log(y);

const p = {
  x: 1,
  y: 2,
  z: 3,
  a: 4,
};

let q = { ...p, reee: 123 };

console.log(p);
console.log(q);

q = { ...q, array: [...y] };

console.log(q);
