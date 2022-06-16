// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const strangeConcat = (arr1: number[], arr2: number[]): number[] => {
//   const arr = [];
//   for (const x of arr1) {
//     arr.push(x);
//   }
//   for (const x of arr2) {
//     arr.push(x);
//   }
//   return arr;
// };

// const strangeConcat2 = (arr1: number[], arr2: number[]): number[] => {
//   return [...arr1, ...arr2];
// };

// console.log(strangeConcat(array1, array2));
// console.log(strangeConcat2(array1, array2));

// const whatever = (x: number): number => { // pure
//   return x;
// };

// let test: number = 3;
// let x: number = whatever(test);

// x = 4;
// console.log(test);

// const bacon = (x: number, ...args: any[]): any[] => {
//   console.log(x);

//   console.log(args);

//   return args;
// };

// bacon(1, "2", 3, [4], { 5: "bacon" });

// export function minArr(arr: number[]): number {
//   return Math.min(...arr);
// }

// console.log(minArr([1, 2, -3, 4]));

function addOne(x: number): number {
  return x + 1;
}

// console.log(addOne(1));
// console.log(addOne(1));
// console.log(addOne(1));

// const x = 3;
// console.log(x);
// console.log(addOne(x));
// console.log(x);

let y = 1; // using global variable makes it impure
function magicAdd(x: number): number {
  y += 1;
  return y + x;
}

// console.log(magicAdd(1));
// console.log(magicAdd(1));

// you see that the array gets larger and larger therefore it's impure
function sensibleConcat<T>(arr1: number[], arr2: number[]): void {
  for (const x of arr2) {
    arr1.push(x);
  }
}

// const arr5 = [1, 2, 3];
// const arr6 = [4, 5, 6];
// // sensibleConcat([1,2,3],[4,5,6]);
// sensibleConcat(arr5, arr6);
// console.log(arr5);

// sensibleConcat(arr5, arr6);
// console.log(arr5);

// sensibleConcat(arr5, arr6);
// console.log(arr5);

// const arr7: number[] = [];
// function temptingConcat(arr1: number[], arr2: number[]): number[] {
//   for (const x of arr1) {
//     arr7.push(x);
//   }
//   for (const x of arr2) {
//     arr7.push(x);
//   }
//   return arr7;
// }

// const array1: number[] = [1, 2, 3];
// const array2: number[] = [4, 5, 6];

// console.log(arr7);
// const array3 = temptingConcat(array1, array2);
// console.log(arr7);
// const array4 = temptingConcat(array1, array2);
// console.log(arr7);

// printing is impure
// const foobar = (arr: number[]): number[] => {
//   for (const x of arr) {
//     console.log(x);
//   }
//   return arr;
// };

// console.log(foobar([1, 2, 3]));

// any form of mutation is considered impure, however, you can make a temp array to make it pure.
// const foobar = (arr: number[]): number[] => {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] += 1;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] -= 1;
//   }
//   return arr;
// };

// console.log(foobar([1, 2, 3]));
// console.log(foobar([1, 2, 3]));
// console.log(foobar([1, 2, 3]));

// const array3 = [1, 2, 3];
// const array4 = [4, 5, 6];
function strangeConcat(arr1: number[], arr2: number[]): number[] {
  const arr = [];
  for (const x of arr1) {
    arr.push(x);
  }
  for (const x of arr2) {
    arr.push(x);
  }

  return arr;
}

// console.log(strangeConcat(array3, array4));

function badCodeWrittenByDev1(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 1;
  }
}

function defensiveCodeWrittenByDev2(arr: number[]): number[] {
  const arrCopy = [];
  for (const x of arr) {
    arrCopy.push(x);
  }
  badCodeWrittenByDev1(arrCopy);
  return arrCopy;
}

function codeWrittenByDev1(arr: number[]): number[] {
  const ans = [];
  for (const x of arr) {
    ans.push(x + 1);
  }

  return ans;
}

function codeWrittenByDev2(arr: number[]): number[] {
  return codeWrittenByDev1(arr);
}

let magic = false;
function terribleCodeWrittenByDev1(arr: number[]): void {
  if (magic) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] += 1;
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      arr[i] += 2;
    }
  }
}

function terribleCodeWrittenByDev2(x: number): number {
  magic = !magic;
  return x + 1;
}

function testMutableConcat(arr: number[], count: number): number[] {
  const tmp: number[] = [];
  for (let i = 0; i < count; i++) {
    sensibleConcat(tmp, arr);
  }

  return tmp;
}

function testImmutableConcat(arr: number[], count: number): number[] {
  let tmp: number[] = [];
  for (let i = 0; i < count; i++) {
    tmp = tmp.concat(arr);
  }

  return tmp;
}

// function timeFunction(name, f) {
//   console.log(`--------------------------`);
//   console.log(`${name} started..`);
//   const t0 = process.hrtime()
//   f();
//   const t1 = process.hrtime(t0);
//   console.log(`${f.name} completed..`);
//   console.info('Execution time (hr): %ds %dms', t1[0], t1[1] / 1000000);
//   return t1[0] + t1[1] / 1000000 / 1000;
// }

// const count = 1000;
// timeFunction("Mutable", () => testMutableConcat(Array(100).fill((x) => 0), count));
// timeFunction("Immutable", () => testImmutableConcat(Array(100).fill((x) => 0), count));

// const counts = [1000, 2000, 4000, 8000];
// const mutableTimes = [];
// for (const count of counts) {
//     let arr = Array(100).fill((x) => 0);
//     mutableTimes.push(timeFunction("Mutable", () => testMutableConcat(arr1, count)));
// }
// const immutableTimes = [];
// for (const count of counts) {
//     let arr = Array(100).fill((x) => 0);
//     immutableTimes.push(timeFunction("Immutable", () => testImmutableConcat(arr1, count)));
// }

// console.log(mutableTimes);
// console.log(immutableTimes);
