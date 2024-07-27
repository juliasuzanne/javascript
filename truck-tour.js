function truckTour(petrolpumps) {
  let valueArr = [];
  //create a new array with only discrepancy
  petrolpumps.forEach((set) => valueArr.push(set[0] - set[1]));
  //for each pump
  console.log(valueArr);

  for (let i = 0; i < valueArr.length; i++) {
    console.log("CHECKING " + i);
    //if current pump can carry truck to next stop
    if (valueArr[i] >= 0) {
      //create a new array with starting point at the beginning
      console.log("contender");

      //check each sum
      // let restArr = valueArr.splice(i, valueArr.length - 1);
      let restArr = [];

      const toEnd = valueArr.length;

      // console.log("TEST" + valueArr.slice(0, toEnd));

      if (i !== 0) {
        restArr.push(...valueArr.slice(i, toEnd));
        restArr.push(...valueArr.slice(0, i));
      } else {
        restArr.push(...valueArr);
      }

      console.log("REST ARR");
      console.log(restArr);
      let checkArr = [];

      restArr.reduce((accumulator, value) => {
        if (parseInt(accumulator) + parseInt(value) >= 0) {
          checkArr.push(true);
        } else {
          checkArr.push(false);
        }
        return parseInt(accumulator) + parseInt(value);
      });

      console.log(checkArr);

      if (!checkArr.includes(false)) {
        return i;
      } else {
        console.log(i + " a dead end, continuing");
      }
    }
  }
}

console.log(
  truckTour([
    [1, 1],
    [1, 2],
    [1, 1],
    [1, 2],
    [3, 4],
    [200, 2],
  ])
);
