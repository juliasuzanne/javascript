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
  console.log(totals[0]);
}

getMoneySpent([3, 1], [5, 2, 8], 10);
