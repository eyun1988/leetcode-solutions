const min_elem_array = (arr: number[]): number => {
  let min = arr[0];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return min;
};

console.log(min_elem_array([1, 2, 5, 7, 8, -1, 19]));
console.log(min_elem_array([19, 2, 5, 7, 8, 1, -9]));
console.log(min_elem_array([1, 2, 5, 7, -118, 1, 19]));
console.log(min_elem_array([-1, 232, 5, -7, 118, -1, 19]));
console.log(min_elem_array([1, 232, -500, 7, -118, 1, 19]));
console.log(min_elem_array([1, 232, -5, 1537, -118, 1, 19]));
