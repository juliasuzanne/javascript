function truckTour(petrolpumps) {
  let curAmount = 0,
    start = 0;
  for (let i = 0; i < petrolpumps.length; i++) {
    console.log("checking index " + i);
    let [amount, distance] = petrolpumps[i];
    console.log("amount " + amount);
    curAmount += amount - distance;
    console.log("distance " + distance);
    console.log("curAmount" + curAmount);

    if (curAmount < 0) {
      start = i + 1;
      curAmount = 0;
    }
  }
  return start;
}

console.log(
  truckTour([
    [1, 1],
    [1, 2],
    [1, 1],
    [1, 2],
    [3, 4],
    [1, 1],
  ])
);
