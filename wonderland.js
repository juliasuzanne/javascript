function checkFunction(q) {
  for (let i = 0; i < q.length - 1; i++) {
    if (q[i + 1] < q[i]) {
      return false;
    }
  }
  return true;
}

function minimumBribes(q) {
  let newA;
  let newB;
  let sorted = false;
  let count = 0;

  for (let i = 0; i < q.length; i++) {
    //if the difference between the index and the value of the index is greater than 2, break and return too many
    if (q[i] - i - 1 > 2) {
      console.log("Too chaotic");
      sorted = true;
      return;
    }
  }

  while (sorted === false) {
    for (let i = 0; i < q.length - 1; i++) {
      if (q[i + 1] < q[i]) {
        newA = q[i + 1];
        newB = q[i];
        q[i] = newA;
        q[i + 1] = newB;
        count++;
      }
    }

    if (checkFunction(q)) {
      console.log(count);
      sorted = true;
      return count;
    }
  }
}

minimumBribes([2, 5, 1, 3, 4]);
