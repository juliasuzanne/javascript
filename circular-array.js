function circularArrayRotation(a, k, queries) {
  for (let i = 0; i < k; i++) {
    let savedNum = a.pop();
    a.unshift(savedNum);
  }

  console.log(a);

  let returnedNums = [];

  queries.forEach((num) => {
    returnedNums.push(a[num]);
  });

  return returnedNums;
}

console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));
