function hurdleRace(k, height) {
  // Write your code here
  let arrMax = height.sort((b, a) => a - b);
  console.log(arrMax);
  let value = arrMax[0] - k;
  if (value > 0) {
    console.log(value);
    return value;
  } else {
    console.log(0);
    return 0;
  }
}

hurdleRace(1, [1, 2, 3, 4, 2, 3, 5]);
