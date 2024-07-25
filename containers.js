function organizingContainers(container) {
  //see what the container is
  console.log(container);
  //initialize empty array to get the max capacity of the containers
  let sumArray = [];
  //get the sum of each row to get number of balls per container
  container.forEach((set) => {
    sumArray.push(
      set.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      })
    );
  });

  //sort capacity array to put max in the 0th place
  sumArray.sort((a, b) => b - a);

  //get a handle to the max number of balls in any container in the array
  let maxSum = sumArray[0];

  //make visible maxSum
  console.log("max " + maxSum);

  //get a handle to the number of types of balls per set
  let n = parseInt(container[0].length);

  //verify number of types of balls per set
  console.log(n);

  //initialize two empty arrays, one to temporarily hold
  let newArr = [];
  let sumArr = [];

  //nested loops sums each column to find the number of occurences of each ball type throughout each container

  //iterate through each type of ball
  for (let i = 0; i < n; i++) {
    //iterate through each container
    for (let j = 0; j < container.length; j++) {
      //add occurences of each type of ball for every container
      newArr.push(container[j][i]);
    }
    sumArr.push(
      //sum and push the total number of each ball type
      newArr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      })
    );

    //make visible total number of each type of ball throughout each container every time there is a new one added
    console.log("sum" + sumArr);
    //reset temporary array holder for next type of ball sum
    newArr = [];
  }

  //sort the array of total numbers of each type by descending
  sumArr.sort((a, b) => b - a);
  //verify the sort
  console.log(sumArr);

  console.log("sumsEachContainer" + sumArray);
  console.log("sumsEachType" + sumArr);

  //check if the sorted arrays are compatible
  for (let i = 0; i < sumArr.length; i++) {
    console.log(sumArray[i] + " " + sumArr[i]);
    if (sumArray[i] < sumArr[i]) return "Impossible";
  }

  //return possible if impossible was not returned
  return "Possible";
}

// function countUnique(iterable) {
//   return new Set(iterable).size;
// }

///TEST CASES

//should return possible
// console.log(
//   organizingContainers([
//     [0, 2, 1],
//     [1, 1, 1],
//     [2, 0, 0],
//   ])
// );

//should return impossible
// console.log(
//   organizingContainers([
//     [1, 3, 1],
//     [2, 1, 2],
//     [3, 3, 3],
//   ])
// );

console.log(
  organizingContainers([
    [1, 4],
    [2, 3],
  ])
);

// console.log(
//   organizingContainers([
//     [9, 9, 9, 3, 3, 6, 2, 6, 3],
//     [9, 9, 8, 7, 9, 9, 9, 2, 3],
//     [9, 9, 8, 7, 9, 9, 9, 2, 3],
//     [9, 9, 9, 7, 6, 3, 0, 1, 9],
//   ])
// );

// console.log(
//   organizingContainers([
//     [
//       [9, 9, 7, 6, 1, 2, 6, 1, 9],
//       [9, 3, 4, 9, 2, 0, 7, 9, 5],
//       [9, 9, 8, 8, 7, 9, 2, 3, 1],
//       [9, 9, 9, 9, 2, 6, 4, 6, 3],
//     ],
//     [
//       [9, 6, 0, 3, 6, 9, 6, 8, 1],
//       [9, 9, 7, 8, 2, 8, 1, 2, 0],
//       [9, 9, 9, 7, 9, 2, 7, 3, 5],
//       [9, 7, 9, 6, 2, 2, 6, 7, 6],
//     ],
//     [
//       [9, 9, 9, 0, 1, 3, 6, 5, 4],
//       [9, 9, 8, 6, 3, 4, 0, 7, 7],
//       [9, 9, 7, 9, 8, 8, 3, 2, 3],
//       [9, 5, 8, 7, 6, 9, 4, 2, 3],
//     ],
//     [
//       [9, 9, 7, 4, 0, 9, 5, 2, 3],
//       [9, 9, 9, 3, 0, 1, 3, 5, 0],
//       [9, 4, 0, 9, 5, 2, 9, 2, 3],
//       [9, 9, 3, 0, 2, 0, 5, 4, 6],
//     ],
//   ])
// );
