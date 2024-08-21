function luckyNumbers(num1, num2) {
  let luckyNumbers = 0;
  for (let i = num1; i < num2 + 1; i++) {
    if (i.toString().includes("6") && !i.toString().includes("8")) {
      luckyNumbers++;
    } else if (!i.toString().includes("6") && i.toString().includes("8")) {
      luckyNumbers++;
    }
  }
  return luckyNumbers;
}

console.log(luckyNumbers(60, 69));
