function plusMinus(arr) {
  // Write your code here
  let pos = 0;
  let neg = 0;
  let zero = 0;
  arr.forEach((num) => {
    if (num > 0) {
      pos++;
    } else if (num < 0) {
      neg++;
    } else {
      zero++;
    }
  });
  console.log((pos / arr.length).toFixed(6));
  console.log((neg / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
  return [(pos / arr.length).toFixed(6), (neg / arr.length).toFixed(6), (zero / arr.length).toFixed(6)];
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
