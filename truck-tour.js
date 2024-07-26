function truckTour(petrolpumps) {
  //start with the first pump on the circle and iterate through
  // console.log(petrolpumps);

  for (let h = 0; h < petrolpumps.length; h++) {
    //set amount of petrol to the amount given by the current pump on the circle
    let petrol = petrolpumps[h][0];

    let workingIndex = true;

    let distanceA = petrolpumps.length - h;

    //starting from current pump, check that there will be enough gas at that pump to make it to each subsequent station. If not, break through the loop to increase through h;
    for (let i = h; i < distanceA; i++) {
      if (petrol > petrolpumps[i][1]) {
        if (i === h) {
          petrol = petrol - petrolpumps[i][1];
          console.log("PETROL" + petrol);
        } else {
          petrol = petrol + petrolpumps[i][0] - petrolpumps[i][1];
          console.log("PETROL" + petrol);
        }
      } else {
        workingIndex = false;
        break;
      }
    }
    console.log("DISTANCEA" + h + " " + workingIndex);

    if (workingIndex === true) {
      return h;
    }
  }
  console.log("ERROR");
}

console.log(
  truckTour([
    [1, 5],
    [1, 5],
    [5, 4],
    [1, 5],
    [1, 5],
  ])
);
