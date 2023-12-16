function pageCount(n, p) {
  // Write your code here
  if (n - p > p - 1) {
    return Math.ceil((p - 1) / 2);
  } else {
    if (n % 2 === 0) {
      return Math.ceil((n - p) / 2);
    } else {
      return Math.floor((n - p) / 2);
    }
  }
}

console.log(pageCount(11, 10));
