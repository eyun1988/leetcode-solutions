const arr = [1, 3, 5, 7, 8, 9];

const binarySearch = (arr, target, start = 0, end = arr.length) => {
    if (end < start) {
        return -1;
    }
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) return binarySearch(arr, target, mid + 1, end);

    return binarySearch(arr, target, start, mid - 1);
};

console.log(binarySearch(arr, 8));
