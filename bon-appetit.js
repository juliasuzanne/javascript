function bonAppetit(n, k, bill, b) {
  let sum = 0;
  bill.forEach((num) => {
    sum += num;
  });
  let annaPaid = Math.round((sum - bill[k]) / 2);
  if (b - annaPaid == 0) {
    console.log("Bon Appetit");
  } else {
    console.log(b - annaPaid);
  }
}

bonAppetit(4, 1, [3, 10, 2, 9], 12);
