function pickingNumbers(a) {
  //sort the array into ascending order
  a.sort((a, b) => a - b);

  //create a map to track frequency of each number that occurs
  const numOccurences = new Map();

  //iterate over sorted array to count occurences of unique numbers and store as a map
  for (let i = 0; i < a.length; i++) {
    if (numOccurences.get(a[i]) == null) {
      numOccurences.set(a[i], 1);
    }
    if (a[i] == a[i + 1]) {
      numOccurences.set(a[i], numOccurences.get(a[i]) + 1);
    }
  }

  //create new array to host unique numbers
  let newArr = [];

  //populate array with unique numbers
  newArr = Array.from(numOccurences.keys());

  //create variable to store largest sums of consecutive numbers
  let record = 0;

  //check which unique numbers have a difference of 1
  for (let i = 0; i < newArr.length - 1; i++) {
    let currentSum = numOccurences.get(newArr[i + 1]) + numOccurences.get(newArr[i]);
    if (newArr[i + 1] - newArr[i] == 1) {
      if (record < currentSum) {
        record = currentSum;
      }
    }
  }

  //new array to track occurances of each number
  let numArray = [];

  //populate array with unique numbers
  numArray = Array.from(numOccurences.values());
  numArray.sort((a, b) => b - a);

  //check if an isolated number's occurences are larger than the record of grouped number occurences sum
  if (numArray[0] > record) {
    record = numArray[0];
  }

  return record;
}

pickingNumbers([4, 6, 5, 3, 3, 1, 1, 1, 1]);
