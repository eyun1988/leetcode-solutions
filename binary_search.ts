const binary_search = (
  arr: number[],
  l: number,
  r: number,
  x: number
): number => {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);

    // base case: if the mid is
    if (arr[mid] == x) {
      return mid;
    }

    if (arr[mid] > x) {
      return binary_search(arr, l, mid - 1, x);
    }

    return binary_search(arr, mid + 1, r, x);
  }
  return -1;
};

let arr1: number[] = [2, 5, 6, 19, 199];
let el: number = 10;
let len: number = arr1.length;

let found = binary_search(arr1, 0, len - 1, el);

console.log(`The element ${el} ${found ? "is not" : "is"} in the element`);
