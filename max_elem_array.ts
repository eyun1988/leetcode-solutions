const max_elem_array = (arr: number[]): number => {
  let max = arr[0];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
};

console.log(max_elem_array([1, 2, 5, 7, 8, 1, 19]));
console.log(max_elem_array([19, 2, 5, 7, 8, 1, 9]));
console.log(max_elem_array([1, 2, 5, 7, 118, 1, 19]));
console.log(max_elem_array([1, 232, 5, 7, 118, 1, 19]));
console.log(max_elem_array([1, 232, 500, 7, 118, 1, 19]));
console.log(max_elem_array([1, 232, 5, 1537, 118, 1, 19]));
