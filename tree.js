function utopianTree(n) {
  let height = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      height++;
    } else {
      height = 2 * height;
    }
  }
  return height;

  // Write your code here
}

console.log(utopianTree(4));
