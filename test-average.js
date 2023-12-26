function findNumberPlaceInArray(array, number) {
  let low = 0;
  let high = array.length;
  let index = getAverage(low, high);
  console.log("LOW: " + low + " HIGH: " + high + " INDEX: " + index);
  recursiveFunction(array, number, low, high, index);
}

function recursiveFunction(array, number, low, high, index) {
  if (array[index] > number) {
    console.log("BIG");
    high = index;
    index = getAverage(low, high);
    console.log("LOW: " + low + " HIGH: " + high + " INDEX: " + index);
  } else if (array[index] < number) {
    console.log("SMALL");
    low = index;
    console.log(low);
    index = getAverage(low, high);
    console.log(" TS LOW: " + low + " HIGH: " + high + " INDEX: " + index);
  } else {
    console.log("else");
    return 100;
  }
}

function getAverage(low, high) {
  return Math.floor((high - low) / 2) + low;
}
console.log(findNumberPlaceInArray([3, 5, 8, 100, 400], 2));
