function getMoneySpent(keyboards, drives, b) {
  let totals = [];
  for (let j = 0; j < keyboards.length; j++) {
    for (let i = 0; i < drives.length; i++) {
      if (keyboards[j] + drives[i] <= b) {
        totals.push(keyboards[j] + drives[i]);
      }
    }
  }
  totals = totals.sort(function (a, b) {
    return b - a;
  });
  if (totals.length === 0) {
    totals[0] = -1;
  }
  return totals[0];
}

console.log(getMoneySpent([4], [5], 5));
