function divisibleSumPairs(n, k, ar) {
  // Write your code here
  ar = ar.sort();
  let count = 0;

  for (let j = 0; j < ar.length; j++) {
    for (let i = j + 1; i < ar.length; i++) {
      if ((ar[i] + ar[j]) % k === 0) {
        count++;
      }
    }
  }
  return count;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
