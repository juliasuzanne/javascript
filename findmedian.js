function findMedian(arr) {
  // Write your code here
  arr = arr.sort((a, b) => a - b);
  const n = arr.length - 1;

  if (n % 2 !== 0) {
    return (arr[arr.length / 2] + arr[n / 2]) / 2;
  } else {
    return arr[n / 2];
  }
}

console.log(findMedian([0, 1, 2, 3, 4, 6, 5, 4, 6]));
