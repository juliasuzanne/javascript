function flippingMatrix(matrix) {
  let maxInt = 0;
  let finalSum = 0;

  for (let i = 0; i < matrix.length / 2; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      console.log(maxInt);
      // console.log(Math.max(matrix[i][j], maxInt));
      maxInt = 0;
      maxInt = Math.max(matrix[i][j], maxInt);
      console.log("A " + maxInt);
      maxInt = Math.max(matrix[matrix.length - i - 1][j], maxInt);
      console.log("B " + maxInt);

      maxInt = Math.max(matrix[i][matrix.length - j - 1], maxInt);
      console.log("C " + maxInt);

      maxInt = Math.max(matrix[matrix.length - i - 1][matrix.length - j - 1], maxInt);
      console.log("D " + maxInt);

      finalSum += maxInt;
      console.log("FINALSUM" + finalSum);
    }
  }
  return finalSum;
}

console.log(
  flippingMatrix([
    [112, 42, 114, 119],
    [56, 125, 101, 49],
    [15, 78, 56, 43],
    [62, 98, 83, 108],
  ])
);
