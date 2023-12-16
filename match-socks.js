function sockMerchant(n, ar) {
  ar = ar.sort();
  let index = 0;
  let count = 0;
  console.log(ar);
  while (index < ar.length - 1) {
    if (ar[index] === ar[index + 1]) {
      count += 1;
      index += 2;
    } else {
      index += 1;
    }
  }
  console.log(count);
}

sockMerchant(9, [20, 20, 20, 50, 10, 10, 30, 10, 10]);
