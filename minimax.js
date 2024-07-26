function miniMaxSum(arr) {
  // Write your code here
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  let i = 0;
  let minSum = 0;
  let maxSum = 0;
  while (i < 4) {
    minSum += arr[i];
    i++;
  }
  i = 1;
  while (i < 5) {
    maxSum += arr[i];
    i++;
  }
  console.log(minSum, maxSum);
}

miniMaxSum([1, 2, 3, 4, 5]);
