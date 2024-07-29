// function level(price, query) {
//   let count = 0;
//   let newArr = [];

//   for (let i = 0; i < query.length; i++) {
//     count = 0;
//     for (let j = 0; j < price.length; j++) {
//       count += Math.abs(price[j] - query[i]);
//     }

//     newArr.push(count);
//   }
//   return newArr;
// }

function level(price, query) {
  let count = 0;
  let newArr = [];
  let queryArr = [];

  query.forEach((q) => queryArr.push(q * query.length));

  for (let i = 0; i < price.length; i++) {
    count += price[i];
  }

  for (let i = 0; i < queryArr.length; i++) {
    newArr.push(Math.abs(count - queryArr[i]));
  }

  return newArr;
}

console.log(level([2, 1, 0], [3, 4, 5]));

//should return 6, 9, 12
