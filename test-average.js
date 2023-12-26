function findNumberPlaceInArray(array, number) {
  let low = 0;
  let high = array.length;
  let index = getAverage(low, high);
  // console.log("LOW: " + low + " HIGH: " + high + " INDEX: " + index);
  return recursiveFunction(array, number, low, high, index);
}

function recursiveFunction(array, number, low, high, index) {
  // console.log("LOW: " + low + " HIGH: " + high + " INDEX: " + index);

  if (array[index] < number && array[index - 1] > number) {
    // console.log("FOUND 1");
    // console.log(index + 1);
    return index + 1;
  } else if (array[index] > number && array[index + 1] < number) {
    // console.log("FOUND 2");
    // console.log(index + 2);
    return index + 2;
  } else {
    if (number < array[index]) {
      low = index;
      index = getAverage(low, high);
      recursiveFunction(array, number, low, high, index);
    } else if (number > array[index]) {
      high = index;
      index = getAverage(low, high);
      recursiveFunction(array, number, low, high, index);
    }
  }
}

function getAverage(low, high) {
  return Math.floor((high - low) / 2) + low;
}

console.log(findNumberPlaceInArray([100, 50, 20, 10, 5, 2], 9));
