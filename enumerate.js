// function* enumerate(array) {
//   for (let i = 0; i < array.length; i++) {
//     yield [i, array[i]];
//   }
// }

const enumerate = (array) => {
  for (const [index, element] of array.entries()) {
    console.log("array[" + index + "] = " + element);
  }
};

console.log(enumerate([1, 2, 3, 4, 5, 6]));

// const itr = enumerate([1, 2, 3, 4, 5, 6]);
// let result = itr.next();

// while (!result.done) {
//   console.log(result.value);
//   result = itr.next();
// }
